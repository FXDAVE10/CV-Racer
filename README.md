# Racing CV Animated - Vladimir Andrei

A professional, animated CV website for a Formula Cart racer with a modern 50/50 split layout, smooth animations, and responsive design.

## 📋 Project Structure

```
racer-cv-animated/
├── index.html          # Main HTML file with semantic structure
├── style.css           # Complete styling with animations and responsive design
├── script.js           # JavaScript for interactive features and animations
├── README.md           # This file
└── assets/             # (Optional) Directory for local images and resources
    └── images/
```

## 🎨 Design Features

### Color Scheme
- **Primary Teal**: `#23A7B9` - Main accent color for highlights
- **Racing Red**: `#A61D1A` - Secondary accent for emphasis
- **Dark Background**: `#0f0f0f` - Main background color
- **Card Background**: `#1a1a1a` - Secondary background for contrast

### Typography
- **Display Font**: Space Mono (monospace, bold) - Headings and titles
- **Body Font**: Roboto (sans-serif) - Body text and descriptions

### Layout
- **Hero Section**: Full-screen introduction with profile image and personal info
- **50/50 Split**: Left side (experience), Right side (achievements & skills)
- **Responsive**: Adapts seamlessly from mobile to desktop

## 🚀 Getting Started

### 1. Basic Setup
Simply open `index.html` in your web browser. No build process or dependencies required!

```bash
# Option 1: Direct file opening
open index.html

# Option 2: Using a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

### 2. Customization

#### Update Personal Information
Edit the following sections in `index.html`:

**Hero Section:**
```html
<h1 class="hero-title">VLADIMIR-<br>ANDREI</h1>
<p class="hero-subtitle">FORMULA CART RACER</p>
<p class="hero-description">Your bio here...</p>
```

**Contact Information:**
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>0745 898 983</span>
</div>
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>vladimir@racingmail.com</span>
</div>
```

**Social Links:**
```html
<a href="https://www.instagram.com/vlqdimir__/" target="_blank" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

#### Update Profile Image
Replace the image URL in the hero section:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Vladimir-Andrei Racing Portrait">
```

#### Modify Experience Items
Edit the experience section in the left split area:
```html
<div class="experience-item">
    <div class="experience-marker"></div>
    <div class="experience-content">
        <p class="experience-year">2021–2023</p>
        <h3 class="experience-title">YOUR TEAM NAME</h3>
        <p class="experience-description">Your description here...</p>
    </div>
</div>
```

#### Update Skills
Modify the skill items in the right split area:
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Your Skill</span>
        <span class="skill-level">4.5/5</span>
    </div>
    <div class="skill-bar">
        <div class="skill-fill" style="width: 90%;"></div>
    </div>
</div>
```

#### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-teal: #23A7B9;      /* Change primary color */
    --primary-red: #A61D1A;       /* Change secondary color */
    --bg-dark: #0f0f0f;           /* Change background */
    --text-primary: #e8e8e8;      /* Change text color */
}
```

## 🎬 Animation Features

### Built-in Animations
1. **Slide In Left**: Hero title and content slide in from the left
2. **Slide In Right**: Hero image slides in from the right
3. **Fade In Up**: Elements fade in and move up on scroll
4. **Pulse Glow**: Background glow elements pulse continuously
5. **Skill Bar Fill**: Skill bars animate to their full width on scroll
6. **Card Hover**: Achievement cards lift and glow on hover
7. **Parallax**: Hero glows move with scroll position

### Scroll Animations
Elements automatically animate when they enter the viewport. Add the `scroll-animate` class to any element:
```html
<div class="scroll-animate">Content here</div>
```

### Custom Animations
Edit animations in `style.css`:
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

### Mobile Optimizations
- Single column layout on mobile
- Adjusted font sizes for readability
- Touch-friendly interactive elements
- Optimized animations for performance

## 🔧 JavaScript Features

### Intersection Observer
Automatically triggers animations when elements enter the viewport:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
```

### Parallax Effect
Hero glow elements move based on scroll position for depth effect.

### Mouse Tracking
Hero image responds to mouse movement for an interactive 3D effect.

### Smooth Scrolling
Anchor links scroll smoothly to their targets.

## 📦 Dependencies

### External Libraries
- **Font Awesome**: Icon library (CDN)
- **Google Fonts**: Typography (CDN)

All dependencies are loaded from CDN, so no installation required!

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support (no animations)

## 🎯 SEO Optimization

The HTML includes:
- Semantic HTML5 structure
- Open Graph meta tags for social sharing
- Twitter Card meta tags
- Proper heading hierarchy
- Image alt text

## 🚀 Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the folder to Netlify
2. Your site will be deployed automatically

### Option 3: Traditional Hosting
Upload all files to your web hosting provider via FTP/SFTP.

## 🎨 Customization Examples

### Change Primary Color
```css
:root {
    --primary-teal: #00FF00;  /* New primary color */
}
```

### Add New Achievement
```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-medal"></i>
    </div>
    <div class="achievement-text">
        <h3>Your Achievement</h3>
        <p>Description of your achievement</p>
    </div>
</div>
```

### Modify Animation Speed
Edit the animation duration in `style.css`:
```css
.animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;  /* Change 0.6s to your duration */
}
```

## 📊 Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Lazy Loading**: Images load only when needed
3. **Debounced Scroll**: Scroll events are optimized
4. **CSS Animations**: Use GPU-accelerated transforms
5. **Minimize Requests**: All styles and scripts are local

## 🐛 Troubleshooting

### Images Not Loading
- Check the image URL is correct
- Ensure the image is accessible (not behind a login)
- Use absolute URLs (https://) for external images

### Animations Not Working
- Check browser compatibility (IE11 has limited support)
- Ensure JavaScript is enabled
- Check browser console for errors (F12)

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked correctly
- Verify color values are valid hex codes

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please refer to the code comments or contact the developer.

---

**Last Updated**: February 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
