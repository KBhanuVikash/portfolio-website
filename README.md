# AI Portfolio Website

A modern, responsive portfolio website designed specifically for showcasing AI and machine learning projects. Built with vanilla HTML, CSS, and JavaScript for fast loading and easy customization.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Easy-to-manage project gallery with filtering
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Built-in contact form for potential clients/employers
- **Easy Customization**: Simple to modify colors, content, and projects
- **SEO Optimized**: Clean HTML structure for better search engine visibility

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and project management
└── README.md           # This file
```

## 🛠️ Customization

### 1. Personal Information
Edit the following in `index.html`:
- Replace "Your Name" with your actual name
- Update email, LinkedIn, and GitHub links in the contact section
- Modify the about section with your personal informations

### 2. Projects Management
Projects are managed in `script.js`. You can:

**Add a new project:**
```javascript
portfolioManager.addProject({
    id: 7,
    title: "My New AI Project",
    description: "Description of your project...",
    image: "fas fa-brain", // Font Awesome icon class
    category: "ai", // ai, nlp, cv, or other
    technologies: ["Python", "TensorFlow", "OpenCV"],
    liveUrl: "https://your-demo.com",
    githubUrl: "https://github.com/yourusername/repo",
    featured: true
});
```

**Remove a project:**
```javascript
portfolioManager.removeProject(projectId);
```

**Update a project:**
```javascript
portfolioManager.updateProject(projectId, {
    title: "Updated Title",
    description: "Updated description..."
});
```

### 3. Styling
Modify `styles.css` to change:
- Colors (search for color values like `#2563eb`)
- Fonts (change the Google Fonts import)
- Layout and spacing
- Animations and effects

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be available at `https://yourusername.github.io/your-portfolio`

### Option 2: Netlify

1. **Drag and Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Get instant deployment with a custom URL

2. **Git Integration:**
   - Connect your GitHub repository
   - Automatic deployments on every push

### Option 3: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## 🎨 Customization Tips

### Adding Your Photo
Replace the Font Awesome icon in the hero section with your actual photo:
```html
<div class="hero-avatar">
    <img src="path/to/your/photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### Changing Colors
The main color scheme uses:
- Primary: `#2563eb` (blue)
- Accent: `#fbbf24` (yellow)
- Gradient: `#667eea` to `#764ba2`

### Adding More Sections
You can easily add new sections by:
1. Adding HTML structure in `index.html`
2. Adding corresponding CSS in `styles.css`
3. Adding navigation links in the navbar

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized touch targets
- Readable fonts on small screens

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🚀**
