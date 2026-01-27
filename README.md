# Data Science Portfolio

A modern, responsive portfolio website showcasing data science and analysis projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Highlight your data science projects with descriptions and links
- **Skills Section**: Display your technical skills and tools
- **Contact Form**: Allow potential employers to reach out easily
- **Social Media Integration**: Links to GitHub, LinkedIn, Kaggle, and other platforms

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── images/             # Folder for images and screenshots
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons

## 📝 Customization Guide

### 1. Personal Information

Open [index.html](index.html) and update:

- **Line 40**: Replace "Your Name" with your actual name
- **Line 94-96**: Update your university and degree information
- **Line 371-389**: Update contact information (email, phone, location)
- **Line 402**: Update footer with your name

### 2. Social Media Links

Update the following links in [index.html](index.html):

- **Lines 49-56**: Hero section social links
- **Lines 390-399**: Contact section social links

Replace placeholder URLs:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Kaggle: `https://kaggle.com/yourusername`
- Email: `your.email@example.com`

### 3. About Section

Edit [index.html](index.html) lines 67-82 to tell your story:
- Your background and interests
- Your skills and learning journey
- Your career goals

### 4. Projects

Each project card (starting at line 154) includes:
- Project title
- Description
- Technologies used
- Links to GitHub repo and live demo

**To add a new project:**
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Python</span>
            <span>TensorFlow</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" target="_blank" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Demo
            </a>
        </div>
    </div>
</div>
```

### 5. Skills

Update the skills section (lines 108-152) to reflect your actual skills. Each skill category includes:
- Category name
- Icon
- List of specific skills

### 6. Colors and Theme

Customize the color scheme in [styles.css](styles.css) (lines 1-17):

```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --secondary-color: #3b82f6;   /* Secondary brand color */
    --accent-color: #60a5fa;      /* Accent color */
    /* ... other colors ... */
}
```

### 7. Adding Project Images

1. Place your project screenshots in the `images/` folder
2. Replace the placeholder in [index.html](index.html):

```html
<!-- Replace this: -->
<div class="project-placeholder">
    <i class="fas fa-chart-bar"></i>
</div>

<!-- With this: -->
<img src="images/project-screenshot.png" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🚀 How to Use

1. **Download/Clone** the portfolio files
2. **Customize** the content as described above
3. **Test locally**: Open `index.html` in your web browser
4. **Deploy**: Upload to a hosting service

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/portfolio`

### Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Your site goes live instantly

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## 💡 Tips for Data Science Portfolios

1. **Quality over Quantity**: Showcase 4-6 strong projects rather than many mediocre ones
2. **Tell a Story**: Explain the problem, your approach, and the impact
3. **Show Results**: Include metrics, visualizations, and outcomes
4. **Keep Updated**: Regularly add new projects and skills
5. **Add Notebooks**: Link to Jupyter notebooks on GitHub
6. **Include Visualizations**: Add charts and graphs from your projects
7. **Highlight Impact**: Emphasize business value and real-world applications

## 📊 Adding Jupyter Notebooks

To showcase notebooks:
1. Upload notebooks to GitHub
2. Use [nbviewer.jupyter.org](https://nbviewer.jupyter.org/) for better rendering
3. Add links in your project cards

## 📧 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Use FormSubmit** (free):
   - Update form action: `<form action="https://formsubmit.co/your@email.com" method="POST">`

2. **Use Formspree** (free):
   - Sign up at [formspree.io](https://formspree.io)
   - Add your endpoint to the form action

3. **Backend Integration**:
   - Use services like EmailJS, Netlify Forms, or build a custom backend

## 🎨 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Mobile Responsive

The portfolio is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 768px
- Mobile: < 480px

## 🔧 Future Enhancements

Consider adding:
- [ ] Blog section for data science articles
- [ ] Dark/Light mode toggle
- [ ] Interactive data visualizations
- [ ] Resume/CV download button
- [ ] Testimonials section
- [ ] Animation library (AOS, GSAP)
- [ ] Analytics integration (Google Analytics)

## 📄 License

Feel free to use this template for your personal portfolio. No attribution required.

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to improve this template!

---

**Good luck with your data science job search!** 🎯

Remember: Your portfolio is often the first impression you make on potential employers. Keep it updated, professional, and reflective of your best work.
