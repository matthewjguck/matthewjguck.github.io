# High School Chapter Portal - UI Demo

A standalone, fully self-contained HTML/CSS showcase of "The Cupid Project" High School Chapter Portal. Perfect for portfolio demonstrations.

## 📁 Folder Structure

```
hs-chapter-portal-demo/
├── index.html                 # Main HTML file
├── README.md                  # This file
└── assets/
    ├── images/                # Main images and icons
    │   ├── cupid-project-logo.svg
    │   ├── hero-collage.png
    │   ├── resources-heading.png
    │   ├── neon-pink-collage.jpg
    │   ├── section-title-bg.png
    │   ├── icon-visit-history.svg
    │   ├── icon-impact-summary.svg
    │   └── icon-report-visit.svg
    └── resources/             # Resource card background images
        ├── student-roles-bg.png
        ├── teacher-handbook-bg.png
        ├── communication-guide-bg.png
        ├── branding-kit-bg.png
        ├── activity-ideas-bg.png
        ├── fundraising-guide-bg.png
        └── resources-bg.jpg
```

## 🚀 How to Use

### Option 1: Local Preview
1. Open `index.html` directly in your browser
2. All assets are relative-path referenced and will load automatically

### Option 2: Upload to Web Host
1. Upload the entire `hs-chapter-portal-demo` folder to your web server
2. Access via `yoursite.com/hs-chapter-portal-demo/index.html`

### Option 3: Static Site Hosting
Deploy to:
- **Vercel**: `vercel --prod` from the folder
- **Netlify**: Drag & drop the folder
- **GitHub Pages**: Push to a repo and enable Pages
- **AWS S3**: Upload with static site hosting enabled

## 📱 Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **No Dependencies** - Pure HTML/CSS, no frameworks required
✅ **Self-Contained** - All assets included, works offline
✅ **Interactive Hover Effects** - Resource cards scale and show overlay buttons
✅ **Professional Design** - Gradient backgrounds, proper typography
✅ **Accessible** - Semantic HTML, readable contrast ratios
✅ **No Functionality** - All links disabled (portfolio showcase only)

## 🎨 Design Highlights

- **Modern Gradient Background** - Transitions from grey to pink as you scroll
- **Resource Grid** - Beautiful card layout with hover animations
- **Event Section** - Professional event display with metrics
- **Navigation Bar** - Sticky header with logo and navigation items
- **Hero Image** - Full-width community imagery
- **Call-to-Action Buttons** - Interactive-styled buttons with icons

## 📊 Asset Details

### Images
- **Hero Collage** (3.1 MB): Community/activity imagery
- **Neon Pink Collage** (3.5 MB): Gradient background for event section
- **Resource Backgrounds** (6+ MB): Individual resource card images
- **Logo & Icons** (SVG): Scalable vector graphics

### Total Size
- **HTML**: ~20 KB
- **CSS**: Embedded in HTML
- **Assets**: ~11 MB total

## 🔧 Customization

### Change Colors
Edit the CSS variables at the top of `index.html`:
```css
:root {
  --foreground: #000000;    /* Text color */
  --accent: #FF61A3;        /* Pink highlight color */
  --border: #e0e0e0;        /* Border color */
  --muted: #666666;         /* Muted text color */
}
```

### Update Text Content
- Edit any text directly in `index.html`
- Navigation items, school name, event details all customizable
- Section headings, button labels, metrics

### Replace Images
- Drop new images into `assets/images/` or `assets/resources/`
- Update `src` attributes in HTML to reference new files
- Keep same aspect ratios for best results

## 📝 Notes

- All links are non-functional (by design for portfolio showcase)
- Background images may take a moment to load on slow connections
- Best viewed in modern browsers (Chrome, Firefox, Safari, Edge)
- Tested at 12+ screen resolutions and responsive breakpoints

## 📦 Files Included

- 8 main images (hero, collage, heading, icon backgrounds)
- 7 resource card background images
- 3 action button icons (SVG)
- 1 logo (SVG)

## 🎯 Use Cases

Perfect for:
- Portfolio websites
- Case studies
- Design showcases
- Client presentations
- Template demonstrations
- Responsive design examples

## ©️ Credits

Design & Development: The Cupid Project
Created: October 2026

---

**Ready to showcase?** Upload the entire folder to your hosting and share the link!
