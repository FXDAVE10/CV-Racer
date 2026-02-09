# Quick Customization Guide

## 🎯 Most Common Changes

### 1. Update Your Name and Title
**File**: `index.html` (Line ~70)
```html
<h1 class="hero-title">
    YOUR-NAME<br>HERE
</h1>
<p class="hero-subtitle">YOUR TITLE HERE</p>
```

### 2. Change Profile Photo
**File**: `index.html` (Line ~95)
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Your Name">
```

**How to get an image URL:**
- Upload image to Imgur, Cloudinary, or similar
- Copy the direct image URL
- Paste it in the `src` attribute

### 3. Update Contact Information
**File**: `index.html` (Lines ~85-90)
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>YOUR PHONE NUMBER</span>
</div>
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>YOUR EMAIL</span>
</div>
```

### 4. Update Social Links
**File**: `index.html` (Lines ~93-105)
```html
<a href="YOUR_INSTAGRAM_URL" target="_blank" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

### 5. Change Colors
**File**: `style.css` (Lines ~8-20)
```css
:root {
    --primary-teal: #YOUR_COLOR_1;    /* Main accent */
    --primary-red: #YOUR_COLOR_2;     /* Secondary accent */
    --bg-dark: #YOUR_COLOR_3;         /* Background */
    --text-primary: #YOUR_COLOR_4;    /* Text color */
}
```

**Color Resources:**
- Color Picker: https://htmlcolorcodes.com
- Gradient Generator: https://www.colorgradient.io

### 6. Update Experience Items
**File**: `index.html` (Lines ~160-185)
```html
<div class="experience-item">
    <div class="experience-marker"></div>
    <div class="experience-content">
        <p class="experience-year">YEAR RANGE</p>
        <h3 class="experience-title">TEAM/ORGANIZATION NAME</h3>
        <p class="experience-description">
            Your experience description here...
        </p>
    </div>
</div>
```

### 7. Update Skills
**File**: `index.html` (Lines ~225-260)
```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Skill Name</span>
        <span class="skill-level">4.5/5</span>
    </div>
    <div class="skill-bar">
        <div class="skill-fill" style="width: 90%;"></div>
    </div>
</div>
```

### 8. Update Achievements
**File**: `index.html` (Lines ~195-220)
```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i>  <!-- Change icon here -->
    </div>
    <div class="achievement-text">
        <h3>Achievement Title</h3>
        <p>Achievement description</p>
    </div>
</div>
```

**Available Icons**: https://fontawesome.com/icons

## 🎨 Advanced Customization

### Change Font
**File**: `style.css` (Line ~1)
```css
/* Replace 'Space Mono' with your font */
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap');
```

### Modify Animation Speed
**File**: `style.css` (Line ~500)
```css
.animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;  /* Change 0.6s */
}
```

### Add New Section
**File**: `index.html` (Add before `</body>`)
```html
<section class="split-section">
    <div class="split-left">
        <div class="split-content">
            <h2 class="split-title">YOUR SECTION</h2>
            <div class="split-divider"></div>
            <!-- Add your content here -->
        </div>
    </div>
</section>
```

### Change Background Gradient
**File**: `style.css` (Line ~50)
```css
body {
    background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 50%, #COLOR3 100%);
}
```

## 🔧 Icon Customization

### Available Icon Sets
- **Font Awesome**: https://fontawesome.com/icons
- **Feather Icons**: https://feathericons.com
- **Heroicons**: https://heroicons.com

### Change Achievement Icons
Replace the icon class:
```html
<!-- Trophy -->
<i class="fas fa-trophy"></i>

<!-- Star -->
<i class="fas fa-star"></i>

<!-- Medal -->
<i class="fas fa-medal"></i>

<!-- Award -->
<i class="fas fa-award"></i>

<!-- Flame -->
<i class="fas fa-fire"></i>
```

## 📱 Mobile Optimization

### Test on Mobile
1. Open DevTools (F12)
2. Click device icon (top-left)
3. Select mobile device

### Adjust Mobile Spacing
**File**: `style.css` (Line ~700)
```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 42px;  /* Adjust as needed */
    }
}
```

## 🚀 Deployment Checklist

Before deploying, check:
- [ ] All images load correctly
- [ ] All links work
- [ ] Mobile layout looks good
- [ ] No console errors (F12)
- [ ] Colors match your branding
- [ ] Text is accurate and spell-checked

## 💡 Tips & Tricks

### Hide Elements
Add `display: none;` to hide elements:
```css
.element-to-hide {
    display: none;
}
```

### Change Opacity
```css
.element {
    opacity: 0.5;  /* 0 = invisible, 1 = fully visible */
}
```

### Add Box Shadow
```css
.element {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
```

### Add Hover Effect
```css
.element:hover {
    transform: scale(1.05);
    color: #23A7B9;
}
```

## 🆘 Common Issues

### Images Not Showing
- Use full URLs (https://...)
- Check image URL is publicly accessible
- Try a different image hosting service

### Colors Look Different
- Different monitors display colors differently
- Use a color picker to verify hex codes
- Test on multiple browsers

### Animations Not Working
- Check browser compatibility
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure JavaScript is enabled

## 📚 Resources

- **HTML Guide**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Guide**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Font Awesome**: https://fontawesome.com/docs
- **Google Fonts**: https://fonts.google.com

---

**Need Help?** Check the README.md file for more detailed information!
