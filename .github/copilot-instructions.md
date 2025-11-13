# Portfolio Website - AI Coding Agent Instructions

## Architecture Overview

This is a **React + TypeScript + Vite** personal portfolio site with a unique **file-based custom HTML layout system** for project pages. Key architectural decisions:

### Custom Layout System (Primary Pattern)
The portfolio uses a **separation-of-concerns** approach for project content:

1. **Layout HTML Files** (`/src/layouts/*.html`) - Raw HTML content for custom project pages
2. **Layout Import System** (`/src/utils/layoutImports.ts`) - Type-safe mapping of layout keys to HTML content using Vite's `?raw` import
3. **Project Data** (`/src/data/projects.ts`) - TypeScript configuration with `layoutKey` references instead of inline HTML
4. **Render Component** (`/src/components/CustomProjectLayout.tsx`) - Loads and renders layouts with Framer Motion animations

**Why this pattern?** Separates content (HTML) from configuration (TypeScript), enables cleaner version control diffs, avoids string escaping issues, and provides type safety through `LayoutKey` union type.

### Routing System
Uses **hash-based client-side routing** (`window.location.hash`) in `App.tsx`:
- `#/` → Home page with Hero, Projects, About sections
- `#/project/{id}` → Individual project detail pages
- `#/gallery` → Gallery view

No React Router - deliberately lightweight single-file routing implementation.

## Development Workflow

### Build & Deploy
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run preview    # Preview production build
```

**Deployment:** Automatic via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. Builds to `/dist` and deploys to GitHub Pages.

### Adding New Project Layouts

**Required steps** (see `CUSTOM_LAYOUTS.md` for detailed examples):

1. Create HTML file in `/src/layouts/projectname.html`
2. Import in `/src/utils/layoutImports.ts`:
   ```typescript
   import projectnameLayout from '../layouts/projectname.html?raw';
   export const layouts = { ..., 'projectname': projectnameLayout } as const;
   ```
3. Add to project in `/src/data/projects.ts`:
   ```typescript
   layoutKey: "projectname" as LayoutKey
   ```

**Type Safety:** The `LayoutKey` type auto-updates from the `layouts` object, ensuring compile-time validation.

## Project-Specific Conventions

### Styling System
- **Tailwind CSS 4** with JIT compiler
- **Safelist** pattern in `tailwind.config.js` for dynamic classes (skill colors, project tags)
- **Framer Motion** for animations - use `initial`, `animate`, `whileInView` patterns consistently
- Custom layout HTML automatically gets `prose prose-lg` classes for typography

### Component Structure
- `/src/components/` - Reusable UI components
- `/src/components/figma/` - Figma integration components
- `/src/components/ui/` - Base UI primitives
- `/src/pages/` - Full page components (Gallery, Home, ProjectPage)

### Image Handling
- Public assets in `/public/images/` - reference as `/images/filename.png`
- Use `<ImageWithFallback>` component for reliable image loading
- Large 3D models (`matthew.glb`, `matthew.usdz`) in `/public/` for model-viewer

### 3D Graphics Integration
- **React Three Fiber** + **@react-three/drei** for 3D scenes
- **Three.js** primitives available
- Model viewer via `@google/model-viewer` CDN script (see `index.html`)

## Key Files & Their Purposes

- `src/App.tsx` - Main routing logic and app structure
- `src/data/projects.ts` - **Single source of truth** for all project data
- `src/utils/layoutImports.ts` - Layout system registry
- `src/components/CustomProjectLayout.tsx` - Custom layout renderer
- `src/components/ProjectDetail.tsx` - Default project template (used when no `layoutKey`)
- `src/types/html.d.ts` - TypeScript declarations for `*.html?raw` imports
- `CUSTOM_LAYOUTS.md` - Comprehensive guide for creating project layouts with examples
- `public/` - Static assets (images, 3D models, standalone HTML experiments)

## Important Patterns

### TypeScript + Vite Raw Imports
Enable importing HTML as strings with type safety:
```typescript
// In src/types/html.d.ts
declare module '*.html?raw' {
  const content: string;
  export default content;
}
```

### Framer Motion Animation Pattern
Consistent reveal animations across components:
```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true, margin: "-100px" }}
>
```

### Project Data Schema
Each project in `projects.ts` includes:
- Basic info: `id`, `title`, `description`, `image`, `tags`
- Optional URLs: `liveUrl`, `githubUrl`, `video`, `figmaEmbed`
- Custom layout: `layoutKey` (if using custom HTML) or rely on default template
- Metadata: `date`, `type`, `location`, `role`, `status`

## Testing & Validation

- **No formal test suite** - validate changes by running dev server
- **Build validation**: Always run `npm run build` before pushing to catch TypeScript errors
- **Visual testing**: Check responsive behavior at mobile/tablet/desktop breakpoints
- **Deploy preview**: CI builds on every PR - check deployment artifacts

## Common Gotchas

1. **New layout not showing?** Check all 3 steps: HTML file created, imported in `layoutImports.ts`, `layoutKey` added to project
2. **TypeScript error on layout key?** The `LayoutKey` type is auto-generated - restart TypeScript server
3. **Images not loading?** Paths must be absolute from root: `/images/name.png` not `./images/name.png`
4. **Build fails with rollup error?** Delete `node_modules` and `package-lock.json`, run `npm install` again
5. **Dynamic Tailwind classes not working?** Add to `safelist` in `tailwind.config.js`

## Style Guide

- **No comments in JSX** unless explaining complex logic - code should be self-documenting
- **Prefer composition** over large components - extract reusable pieces
- **Mobile-first responsive design** - use `md:`, `lg:` breakpoints
- **Semantic HTML** in custom layouts - proper heading hierarchy, alt text, ARIA when needed
