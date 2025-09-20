// Main JavaScript file for Task 2 - Templating Demo
// Modern ES6+ JavaScript with enhanced functionality

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Task 2 - Templating Demo Initialized');
    
    // Initialize all modules
    initializeNavigation();
    initializeAnimations();
    initializeFormValidation();
    initializeTooltips();
    initializeScrollEffects();
    initializeDarkModeToggle();
    
    // Display welcome message
    displayWelcomeMessage();
});

/**
 * Enhanced Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            navbar?.classList.add('navbar-scrolled');
        } else {
            navbar?.classList.remove('navbar-scrolled');
        }
    }, 100));
    
    // Active nav link highlighting
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Intersection Observer for scroll animations
 */
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .statistic, .tech-item, .learning-item, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Enhanced form validation
 */
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', debounce(validateField, 300));
        });
        
        // Form submission
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    function validateField(event) {
        const field = event.target;
        const value = field.value.trim();
        
        // Remove existing feedback
        const existingFeedback = field.parentNode.querySelector('.dynamic-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        // Validate based on field type
        let isValid = true;
        let message = '';
        
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = emailRegex.test(value) || value === '';
                message = isValid ? '' : 'Please enter a valid email address.';
                break;
            case 'text':
                if (field.required) {
                    isValid = value.length >= 2;
                    message = isValid ? '' : 'This field must be at least 2 characters long.';
                }
                break;
            case 'textarea':
                if (field.required) {
                    isValid = value.length >= 10;
                    message = isValid ? '' : 'Please provide a message with at least 10 characters.';
                }
                break;
        }
        
        // Update field state
        field.classList.toggle('is-valid', isValid && value !== '');
        field.classList.toggle('is-invalid', !isValid && value !== '');
        
        // Show dynamic feedback
        if (message && value !== '') {
            const feedback = document.createElement('div');
            feedback.className = 'dynamic-feedback text-danger small mt-1';
            feedback.textContent = message;
            field.parentNode.appendChild(feedback);
        }
    }
    
    function handleFormSubmission(event) {
        event.preventDefault();
        event.stopPropagation();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        if (contactForm.checkValidity()) {
            showSuccessMessage(data);
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        }
        
        contactForm.classList.add('was-validated');
    }
    
    function showSuccessMessage(data) {
        const successAlert = createAlert('success', 
            `✅ Thank you, ${data.name}! Your message has been received.`,
            'In a real application, this would be processed by a server.'
        );
        
        contactForm.parentNode.insertBefore(successAlert, contactForm);
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    }
}

/**
 * Initialize Bootstrap tooltips
 */
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Scroll effects and progress indicator
 */
function initializeScrollEffects() {
    // Create scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    // Update scroll progress
    window.addEventListener('scroll', throttle(() => {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        const progressBarElement = progressBar.querySelector('.scroll-progress-bar');
        if (progressBarElement) {
            progressBarElement.style.width = `${Math.min(scrollPercent, 100)}%`;
        }
    }, 16));
    
    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'btn btn-primary btn-back-to-top position-fixed';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        bottom: 20px;
        right: 20px;
        z-index: 1050;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    document.body.appendChild(backToTop);
    
    // Show/hide back to top button
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    }, 100));
    
    // Back to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Dark mode toggle (bonus feature)
 */
function initializeDarkModeToggle() {
    // Create dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'btn btn-outline-secondary btn-sm dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.title = 'Toggle Dark Mode';
    
    // Add to navbar
    const navbar = document.querySelector('.navbar .container');
    if (navbar) {
        darkModeToggle.style.cssText = 'position: absolute; top: 10px; right: 10px;';
        navbar.style.position = 'relative';
        navbar.appendChild(darkModeToggle);
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

/**
 * Display welcome message with project info
 */
function displayWelcomeMessage() {
    const messages = [
        '🚀 Welcome to Task 2 - Templating Engine Demo!',
        '✨ Built with Nunjucks + Vite for modern web development',
        '📱 Fully responsive design with Bootstrap 5',
        '⚡ Lightning-fast development with hot reloading'
    ];
    
    console.group('🎯 Project Information');
    messages.forEach(message => console.log(message));
    console.log('👤 Developer: MANCHALA-SRAVAN-KUMAR');
    console.log('📅 Year: ' + new Date().getFullYear());
    console.log('🛠️  Tech Stack: Nunjucks, Vite, Bootstrap 5, Vanilla JS');
    console.groupEnd();
    
    // Performance metrics
    if (performance && performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⏱️  Page loaded in ${loadTime}ms`);
    }
}

/**
 * Utility Functions
 */

// Throttle function for performance optimization
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for input validation
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Create alert element
function createAlert(type, title, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show mb-4`;
    alert.innerHTML = `
        <strong>${title}</strong>
        ${message ? `<br><small>${message}</small>` : ''}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    return alert;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Add custom CSS for dynamic features
const customStyles = `
    /* Scroll Progress Bar */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 1060;
        background: rgba(255, 255, 255, 0.1);
    }
    
    .scroll-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #667eea, #764ba2);
        width: 0%;
        transition: width 0.1s ease;
    }
    
    /* Dark Theme */
    .dark-theme {
        background-color: #1a1a1a !important;
        color: #e0e0e0 !important;
    }
    
    .dark-theme .card {
        background-color: #2d2d2d !important;
        border-color: #404040 !important;
        color: #e0e0e0 !important;
    }
    
    .dark-theme .bg-light {
        background-color: #2d2d2d !important;
    }
    
    .dark-theme .text-muted {
        color: #b0b0b0 !important;
    }
    
    .dark-theme .navbar {
        background-color: #1a1a1a !important;
    }
    
    /* Back to top button animation */
    .btn-back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    /* Enhanced form styles */
    .form-control.is-valid {
        border-color: #198754;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.94-.94 1.88 1.88 3.06-3.06.94.94-4 4z'/%3e%3c/svg%3e");
    }
    
    .form-control.is-invalid {
        border-color: #dc3545;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath d='m6 3v4m0 2h.01'/%3e%3c/svg%3e");
    }
    
    /* Loading animation */
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    
    .loading {
        animation: pulse 2s infinite;
    }
`;

// Inject custom styles
const styleSheet = document.createElement('style');
styleSheet.textContent = customStyles;
document.head.appendChild(styleSheet);

// Add FontAwesome for icons (if not already included)
if (!document.querySelector('link[href*="fontawesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
}

// Export functions for potential use in other modules
window.TemplatingDemo = {
    throttle,
    debounce,
    createAlert,
    formatNumber
};