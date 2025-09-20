import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import nunjucks from 'nunjucks';

// Custom plugin to handle Nunjucks templates
function nunjucksPlugin() {
  return {
    name: 'vite-plugin-nunjucks',
    configureServer(server) {
      // Setup Nunjucks environment
      const env = nunjucks.configure(['src/templates'], {
        autoescape: true,
        watch: true
      });

      // Add global variables
      env.addGlobal('currentYear', new Date().getFullYear());
      env.addGlobal('siteName', 'Bootstrap Demo');
      env.addGlobal('author', 'MANCHALA-SRAVAN-KUMAR');

      // Middleware to serve rendered templates
      server.middlewares.use('/', (req, res, next) => {
        if (req.url.endsWith('.html') && !req.url.includes('/src/')) {
          const templateName = req.url.replace('/', '').replace('.html', '') || 'index';
          const templatePath = `pages/${templateName}.njk`;
          const fullPath = resolve('src/templates/pages', `${templateName}.njk`);
          
          if (fs.existsSync(fullPath)) {
            try {
              const rendered = env.render(templatePath);
              // Replace asset paths for development
              const devRendered = rendered
                .replace(/href="assets\//g, 'href="/src/assets/css/')
                .replace(/src="assets\//g, 'src="/src/assets/js/');
              
              res.setHeader('Content-Type', 'text/html');
              res.end(devRendered);
              return;
            } catch (error) {
              console.error('Template rendering error:', error);
              res.statusCode = 500;
              res.end(`Template Error: ${error.message}`);
              return;
            }
          }
        }
        next();
      });
    },
    generateBundle(options, bundle) {
      // Generate HTML files from templates during build
      const env = nunjucks.configure(['src/templates'], {
        autoescape: true
      });

      // Add global variables
      env.addGlobal('currentYear', new Date().getFullYear());
      env.addGlobal('siteName', 'Bootstrap Demo');
      env.addGlobal('author', 'MANCHALA-SRAVAN-KUMAR');

      const pagesDir = 'src/templates/pages';
      if (fs.existsSync(pagesDir)) {
        const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.njk'));
        
        files.forEach(file => {
          try {
            const rendered = env.render(`pages/${file}`);
            const htmlFile = file.replace('.njk', '.html');
            
            // Find the actual built CSS and JS file names
            const cssFile = Object.keys(bundle).find(key => key.startsWith('assets/styles.') && key.endsWith('.css'));
            const jsFile = Object.keys(bundle).find(key => key.startsWith('assets/main.') && key.endsWith('.js'));
            
            // Replace asset references with actual built file names
            let finalRendered = rendered;
            if (cssFile) {
              finalRendered = finalRendered.replace('assets/styles.css', cssFile);
            }
            if (jsFile) {
              finalRendered = finalRendered.replace('assets/main.js', jsFile);
            }
            
            // Emit the HTML file as part of the build output
            this.emitFile({
              type: 'asset',
              fileName: htmlFile,
              source: finalRendered
            });
          } catch (error) {
            console.error(`Error rendering ${file}:`, error);
          }
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [nunjucksPlugin()],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'src/assets/js/main.js'),
        styles: resolve(process.cwd(), 'src/assets/css/styles.css')
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'styles.css') {
            return 'assets/styles.[hash].css';
          }
          return 'assets/[name].[hash].[ext]';
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: (entryInfo) => {
          if (entryInfo.name === 'main') {
            return 'assets/main.[hash].js';
          }
          return 'assets/[name].[hash].js';
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
      '@assets': resolve(process.cwd(), 'src/assets'),
      '@templates': resolve(process.cwd(), 'src/templates')
    }
  }
});