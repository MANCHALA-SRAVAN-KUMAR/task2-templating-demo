# Task 2 - Templating Engine Demo 🚀

## Modern Web Development with Nunjucks + Vite

This project demonstrates the evolution from a simple Bootstrap demo (Task 1) to a sophisticated templating engine + bundler implementation using modern web development tools.

### 🛠️ Technology Stack

#### Chosen Technologies:
- **Templating Engine**: [Nunjucks](https://mozilla.github.io/nunjucks/) - Powerful, rich template engine for JavaScript
- **Bundler/Task Runner**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **CSS Framework**: [Bootstrap 5](https://getbootstrap.com/) - Modern responsive framework
- **JavaScript**: Vanilla ES6+ with modern features

#### Why These Choices?

**Nunjucks over Handlebars:**
- ✅ More powerful template inheritance system
- ✅ Rich built-in filters and functions
- ✅ Better error messages and debugging
- ✅ Asynchronous rendering support
- ✅ Compatible with Python's Jinja2

**Vite over Gulp:**
- ✅ Lightning-fast Hot Module Replacement (HMR)
- ✅ Native ES modules support
- ✅ Zero-config development server
- ✅ Optimized production builds with Rollup
- ✅ Modern JavaScript ecosystem integration

### 📂 Project Structure

```
task2-templating-demo/
├── src/
│   ├── templates/
│   │   ├── layouts/
│   │   │   └── base.njk           # Base layout template
│   │   ├── partials/
│   │   │   ├── navigation.njk     # Navigation component
│   │   │   └── footer.njk         # Footer component
│   │   └── pages/
│   │       ├── index.njk          # Home page template
│   │       ├── about.njk          # About page template
│   │       └── contact.njk        # Contact page template
│   └── assets/
│       ├── css/
│       │   └── styles.css         # Custom styles
│       ├── js/
│       │   └── main.js            # Main JavaScript file
│       └── images/                # Image assets
├── dist/                          # Compiled output
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

### 🚀 Getting Started

#### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

#### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MANCHALA-SRAVAN-KUMAR/task2-templating-demo.git
   cd task2-templating-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   This will start the development server at `http://localhost:3000` with hot reloading enabled.

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Compiled files will be generated in the `dist/` directory.

5. **Preview production build**
   ```bash
   npm run preview
   ```

#### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build for production with optimization |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Clean the dist directory |

### 🎯 Features

#### Template System
- **Layout Inheritance**: Base layout with blocks for content
- **Partial Components**: Reusable navigation and footer components
- **Dynamic Content**: Global variables and context-aware rendering
- **Template Logic**: Conditional rendering and loops

#### Development Experience
- **Hot Reloading**: Instant updates without page refresh
- **Error Handling**: Clear error messages and debugging info
- **Modern JavaScript**: ES6+ support with automatic transpilation
- **Asset Processing**: Automatic CSS and JS optimization

#### Production Ready
- **Optimized Builds**: Minified CSS, JS, and HTML
- **Asset Hashing**: Cache-busting with content hashes
- **Modern Output**: Optimized for modern browsers
- **Performance**: Lighthouse-optimized builds

### 🔧 Configuration

#### Vite Configuration (`vite.config.js`)
The project uses a custom Vite plugin to handle Nunjucks templates:

```javascript
// Custom Nunjucks plugin for seamless integration
function nunjucksPlugin() {
  return {
    name: 'vite-plugin-nunjucks',
    configureServer(server) {
      // Development server with template rendering
    },
    generateBundle() {
      // Production build with template compilation
    }
  };
}
```

#### Template Configuration
Global variables available in all templates:
- `currentYear`: Current year for copyright
- `siteName`: Project name
- `author`: Developer name

### 📱 Responsive Design

The project maintains the responsive design from Task 1 while adding:
- Enhanced mobile navigation
- Improved touch interactions
- Better accessibility features
- Modern CSS Grid and Flexbox layouts

### 🎨 Styling

#### CSS Architecture
- **Custom Properties**: CSS variables for theming
- **Modern Layouts**: Grid and Flexbox
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: High contrast and reduced motion support

#### Bootstrap Integration
- Bootstrap 5.3.0 via CDN for rapid development
- Custom CSS overrides for unique styling
- Utility-first approach for spacing and layout

### 📊 Performance

#### Development
- **Fast Refresh**: Sub-second template updates
- **Efficient Bundling**: Only rebuild changed files
- **Source Maps**: Easy debugging in development

#### Production
- **Minification**: Compressed CSS, JS, and HTML
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Optimized file sizes
- **Caching**: Content-based hashing for efficient caching

### 🧪 Testing & Validation

#### Manual Testing Checklist
- [ ] All pages render correctly
- [ ] Navigation works across all pages
- [ ] Forms validate properly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Accessibility features work
- [ ] Production build generates correct files

#### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari & Chrome

### 📈 Comparison with Task 1

| Aspect | Task 1 (Bootstrap Demo) | Task 2 (Templating + Bundler) |
|--------|------------------------|--------------------------------|
| **Architecture** | Static HTML files | Component-based templates |
| **Development** | Manual file editing | Hot reloading with instant feedback |
| **Maintainability** | Duplicated code | DRY with template inheritance |
| **Build Process** | None | Optimized production builds |
| **Scalability** | Limited | Highly scalable architecture |
| **Performance** | Basic | Optimized with modern tooling |

### 🚀 Deployment

#### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages
3. Configure GitHub Actions for automatic deployment

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

#### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### 🔗 Links

- **Task 1 Repository**: [bootstrap-demo](https://github.com/MANCHALA-SRAVAN-KUMAR/bootstrap-demo)
- **Task 1 Live Demo**: [Live Site](https://manchala-sravan-kumar.github.io/bootstrap-demo/)
- **Task 2 Repository**: [task2-templating-demo](https://github.com/MANCHALA-SRAVAN-KUMAR/task2-templating-demo)
- **Task 2 Live Demo**: [Live Site](https://manchala-sravan-kumar.github.io/task2-templating-demo/)

### 📚 Learning Resources

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Vite Documentation](https://vitejs.dev/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Modern JavaScript Guide](https://javascript.info/)

### 🤝 Contributing

This is an educational project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 👤 Author

**MANCHALA-SRAVAN-KUMAR**
- GitHub: [@MANCHALA-SRAVAN-KUMAR](https://github.com/MANCHALA-SRAVAN-KUMAR)
- Project: Full Stack Developer Intern Tasks

### 🙏 Acknowledgments

- **Bootstrap Team** - For the excellent CSS framework
- **Mozilla** - For the powerful Nunjucks templating engine
- **Vite Team** - For the amazing build tool
- **GitHub Copilot** - For development assistance
- **Internship Program** - For providing structured learning tasks

---

**Built with ❤️ using modern web development tools**

*This project demonstrates the power of combining templating engines with modern build tools to create maintainable, scalable web applications.*