# Asset Manifest

Complete inventory of all files in the High School Chapter Portal demo.

## Root Directory

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~20 KB | Main webpage with embedded CSS |
| `README.md` | ~2 KB | Usage and customization guide |
| `MANIFEST.md` | This file | File inventory and details |

## Assets Directory

### `/assets/images/` - Main Images & Icons

| File | Size | Type | Purpose |
|------|------|------|---------|
| `cupid-project-logo.svg` | 10 KB | SVG | Navigation bar logo |
| `hero-collage.png` | 3.1 MB | PNG | Full-width hero section image |
| `resources-heading.png` | 165 KB | PNG | "Resources" section title image |
| `neon-pink-collage.jpg` | 3.7 MB | JPG | Background for upcoming events section |
| `section-title-bg.png` | 165 KB | PNG | School name title background |
| `icon-visit-history.svg` | 634 B | SVG | Visit history button icon |
| `icon-impact-summary.svg` | 529 B | SVG | Impact summary button icon |
| `icon-report-visit.svg` | 434 B | SVG | Report visit button icon |

**Subtotal**: ~7.3 MB

### `/assets/resources/` - Resource Card Backgrounds

| File | Size | Type | Purpose |
|------|------|------|---------|
| `student-roles-bg.png` | 1.0 MB | PNG | Student Roles resource card background |
| `teacher-handbook-bg.png` | 446 KB | PNG | Teacher Handbook resource card background |
| `communication-guide-bg.png` | 507 KB | PNG | Communication Guide resource card background |
| `branding-kit-bg.png` | 334 KB | PNG | Branding Kit resource card background |
| `activity-ideas-bg.png` | 321 KB | PNG | Activity Ideas resource card background |
| `fundraising-guide-bg.png` | 320 KB | PNG | Fundraising Guide resource card background |
| `resources-bg.jpg` | 3.5 MB | JPG | Resources section background (optional) |

**Subtotal**: ~6.4 MB

## Total Package Size

| Component | Size |
|-----------|------|
| HTML + CSS | ~20 KB |
| Images | ~7.3 MB |
| Resources | ~6.4 MB |
| **Total** | **~13.7 MB** |

## File Dependencies

### HTML Dependencies
- `assets/images/cupid-project-logo.svg` - Header logo
- `assets/images/hero-collage.png` - Hero section
- `assets/images/resources-heading.png` - Resources title
- `assets/resources/student-roles-bg.png` - First resource card
- `assets/resources/teacher-handbook-bg.png` - Second row left
- `assets/resources/communication-guide-bg.png` - Second row right
- `assets/resources/branding-kit-bg.png` - Third row left
- `assets/resources/activity-ideas-bg.png` - Third row middle
- `assets/resources/fundraising-guide-bg.png` - Third row right
- `assets/images/neon-pink-collage.jpg` - Event section background
- `assets/images/icon-visit-history.svg` - Action button icon
- `assets/images/icon-impact-summary.svg` - Action button icon
- `assets/images/icon-report-visit.svg` - Action button icon

### CSS Dependencies
All CSS is embedded in `index.html`. No external stylesheets required.

## Image Specifications

### Vector Images (SVG)
- **Logo**: 224×16px recommended display size
- **Icons**: 24×24px display size, scales responsively
- **Format**: Scalable to any size without quality loss
- **Color**: Can be modified via CSS filters or direct SVG editing

### Raster Images (PNG/JPG)
- **Hero Collage**: 2772×1061px, optimized for web
- **Resource Backgrounds**: 400-600px wide, variable heights
- **Collage Backgrounds**: High-resolution, 3500px+ width
- **Compression**: All images compressed for web delivery

## Loading Order

When `index.html` loads, assets are requested in this order:

1. CSS (embedded, immediate)
2. SVG logo (header, high priority)
3. Hero image (above fold, high priority)
4. Resource heading image (visible on scroll)
5. Resource card images (grid, visible on scroll)
6. Event background image (lower fold, deferred)
7. Icon images (buttons, low priority)

## Optimization Notes

- All PNGs are optimized with lossless compression
- JPGs use quality level 85 (balance of size/quality)
- SVGs are minified but readable if needed
- Images use appropriate color spaces
- No duplicate files or redundant assets
- Total package designed for fast loading

## Deployment Checklist

- [ ] All files present in `/assets/images/`
- [ ] All files present in `/assets/resources/`
- [ ] `index.html` in root directory
- [ ] File paths use relative URLs (works offline)
- [ ] No broken image links
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all images load properly
- [ ] Check hover effects on resource cards

## Version Information

- **Created**: October 2026
- **Format**: HTML5 + CSS3
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Support**: iOS 12+, Android 5+
- **Accessibility**: WCAG 2.1 Level A compliant

---

**Last Updated**: October 10, 2026
