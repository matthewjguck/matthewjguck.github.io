# Custom Project Layouts Guide

This portfolio now supports custom HTML layouts for each project, giving you complete control over how content and images are arranged.

# Custom HTML Layouts System

## Overview
The portfolio now supports custom HTML layouts for project pages, allowing for rich, interactive content that goes beyond the standard project template. The system uses file-based imports for better organization and maintainability.

## How It Works

### 1. Layout Files
Custom layouts are stored as HTML files in `/src/layouts/` directory:
- `nab3d.html` - Custom layout for the Nab 3D project
- `ekg.html` - Custom layout for the E.K.G. project  
- `cupid.html` - Custom layout for The Cupid Project
- Additional layout files can be added as needed

### 2. Layout Import System
The `/src/utils/layoutImports.ts` file handles:
- Importing HTML files as raw text using Vite's `?raw` suffix
- Mapping layout keys to their corresponding HTML content
- Type-safe layout key management

### 3. Project Configuration
Projects are configured in `/src/data/projects.ts` with:
- `layoutKey` property instead of inline `customLayout` strings
- Type-safe layout key references
- Cleaner, more maintainable project data

### 4. Rendering Component
The `CustomProjectLayout` component:
- Takes a `layoutKey` prop instead of raw HTML content
- Loads the appropriate layout using the import system
- Renders with motion animations and styling

## Adding New Custom Layouts

### Step 1: Create Layout File
Create a new HTML file in `/src/layouts/` (e.g., `myproject.html`):

```html
<div class="space-y-16">
  <section class="text-center">
    <h2 class="text-4xl font-bold text-gray-900 mb-4">My Custom Project</h2>
    <p class="text-xl text-gray-600">Project description...</p>
  </section>
  
  <!-- Add your custom sections here -->
</div>
```

### Step 2: Register in Import System
Add to `/src/utils/layoutImports.ts`:

```typescript
import myprojectLayout from '../layouts/myproject.html?raw';

export const layouts = {
  'nab3d': nab3dLayout,
  'ekg': ekgLayout,
  'myproject': myprojectLayout, // Add new layout
} as const;
```

### Step 3: Update Project Data
In `/src/data/projects.ts`, add the `layoutKey` to your project:

```typescript
{
  id: "myproject",
  title: "My Project",
  // ... other properties
  layoutKey: "myproject" as LayoutKey,
}
```

## Benefits of File-Based System

1. **Better Organization**: HTML layouts are separated from TypeScript data
2. **Easier Editing**: Direct HTML editing without escaping issues
3. **Version Control**: Cleaner diffs for layout changes
4. **Maintainability**: Clear separation of concerns
5. **Type Safety**: TypeScript ensures layout keys are valid
6. **Performance**: Vite bundles layouts efficiently at build time

## Styling Guidelines

### Tailwind CSS Classes
Use Tailwind utility classes for styling:
- `space-y-*` for vertical spacing
- `grid`, `lg:grid-cols-*` for responsive layouts
- Color classes: `bg-blue-50`, `text-gray-900`, etc.
- Rounded corners: `rounded-xl`, `rounded-2xl`
- Shadows: `shadow-lg`, `shadow-xl`

### Responsive Design
- Use responsive prefixes: `md:`, `lg:`
- Mobile-first approach
- Test on different screen sizes

### Semantic Structure
- Use proper HTML semantic elements
- Include proper alt text for images
- Ensure accessibility compliance

## Technical Details

### Vite Raw Imports
The system uses Vite's `?raw` suffix to import HTML files as strings:
```typescript
import layoutContent from '../layouts/myfile.html?raw';
```

### TypeScript Support
Type declarations in `/src/types/html.d.ts` enable TypeScript support for HTML raw imports.

### Build Process
At build time, Vite processes the raw imports and includes the HTML content in the bundle, ensuring optimal performance.

## Example Projects

### Nab 3D (`nab3d.html`)
Features:
- Problem/solution sections
- Technical innovation details
- Code examples with syntax highlighting
- Award recognition highlights

### E.K.G. (`ekg.html`)
Features:
- Educational impact focus
- Design process breakdown
- User research highlights
- Interactive game concept explanation

Both examples demonstrate best practices for creating engaging, informative custom layouts while maintaining consistency with the overall portfolio design.

## Available CSS Classes

The system includes Tailwind CSS classes and custom styling:

### Layout & Spacing
- `space-y-{number}` - Vertical spacing between elements
- `grid lg:grid-cols-2 gap-8` - Two-column grid layout
- `max-w-{size} mx-auto` - Centered content with max width

### Text Styling
- `text-{size} font-{weight} text-{color}` - Typography
- `leading-relaxed` - Line height
- `mb-{number}` - Margin bottom

### Components & Colors
- `bg-{color}-{shade}` - Background colors
- `border border-{color}-{shade}` - Borders
- `rounded-{size}` - Border radius
- `shadow-{size}` - Drop shadows
- `p-{number}` - Padding

### Pre-styled Elements
- Images automatically get: `w-full h-auto rounded-lg shadow-md`
- Headings are automatically styled (h1, h2, h3)
- Lists get proper styling
- Code blocks get syntax highlighting

## Layout Examples

### Two-Column Text + Image
```html
<section class="grid lg:grid-cols-2 gap-12 items-center">
  <div class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-900">Section Title</h2>
    <p class="text-lg text-gray-700 leading-relaxed">
      Your text content here...
    </p>
  </div>
  <div class="relative">
    <img src="/images/your-image.png" alt="Description" />
  </div>
</section>
```

### Highlight Boxes
```html
<div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
  <h3 class="font-semibold text-blue-900 mb-3">Title</h3>
  <p class="text-blue-800">Content...</p>
</div>
```

### Icon Cards
```html
<div class="grid md:grid-cols-3 gap-8">
  <div class="text-center">
    <div class="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-white text-2xl">🎮</span>
    </div>
    <h3 class="font-semibold text-gray-900 mb-2">Title</h3>
    <p class="text-gray-600">Description</p>
  </div>
</div>
```

### Code Blocks
```html
<div class="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm">
  <div class="space-y-2">
    <div><span class="text-blue-400">&lt;code&gt;</span></div>
    <div class="pl-4">Your code here</div>
    <div><span class="text-blue-400">&lt;/code&gt;</span></div>
  </div>
</div>
```

## Color Schemes

### Available Colors
- Blue: `bg-blue-{50,100,500,900}`, `text-blue-{800,900}`
- Green: `bg-green-{50,100,500,900}`, `text-green-{800,900}`
- Red: `bg-red-{50,100,500,900}`, `text-red-{800,900}`
- Purple: `bg-purple-{50,100,500,900}`, `text-purple-{800,900}`
- Orange: `bg-orange-{50,100,500,900}`, `text-orange-{800,900}`
- Gray: `bg-gray-{50,100,200,800,900}`, `text-gray-{600,700,800,900}`

## Tips

1. **Start Simple**: Begin with basic sections and gradually add complexity
2. **Use Consistent Spacing**: Stick to the `space-y-{number}` system
3. **Test Responsively**: Use `lg:grid-cols-2` for mobile-responsive layouts
4. **Image Optimization**: Images are automatically styled, just provide good alt text
5. **Color Consistency**: Stick to the predefined color schemes for consistency

## Fallback System

If a project doesn't have a `customLayout`, it will use the default template with:
- Header with title, description, tags, and buttons
- Hero image
- Content text
- Video embed (if provided)
- Figma embed (if provided)
- Gallery (if provided)

This gives you the flexibility to customize specific projects while keeping others simple.
