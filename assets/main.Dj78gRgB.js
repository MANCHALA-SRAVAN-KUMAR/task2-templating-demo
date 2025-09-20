document.addEventListener("DOMContentLoaded",function(){console.log("🚀 Task 2 - Templating Demo Initialized"),h(),f(),b(),v(),w(),y(),k()});function h(){const e=document.querySelector(".navbar"),t=document.querySelectorAll(".nav-link");window.addEventListener("scroll",d(()=>{window.scrollY>50?e==null||e.classList.add("navbar-scrolled"):e==null||e.classList.remove("navbar-scrolled")},100)),t.forEach(n=>{const o=n.getAttribute("href"),a=window.location.pathname.split("/").pop()||"index.html";(o===a||a===""&&o==="index.html")&&n.classList.add("active")}),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(o){o.preventDefault();const a=document.querySelector(this.getAttribute("href"));a&&a.scrollIntoView({behavior:"smooth",block:"start"})})})}function f(){const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(a.target.classList.add("fade-in-up"),t.unobserve(a.target))})},e);document.querySelectorAll(".card, .statistic, .tech-item, .learning-item, .contact-item").forEach(o=>{t.observe(o)})}function b(){const e=document.getElementById("contactForm");e&&(e.querySelectorAll("input, textarea, select").forEach(i=>{i.addEventListener("blur",t),i.addEventListener("input",u(t,300))}),e.addEventListener("submit",n));function t(a){const i=a.target,s=i.value.trim(),m=i.parentNode.querySelector(".dynamic-feedback");m&&m.remove();let r=!0,l="";switch(i.type){case"email":r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)||s==="",l=r?"":"Please enter a valid email address.";break;case"text":i.required&&(r=s.length>=2,l=r?"":"This field must be at least 2 characters long.");break;case"textarea":i.required&&(r=s.length>=10,l=r?"":"Please provide a message with at least 10 characters.");break}if(i.classList.toggle("is-valid",r&&s!==""),i.classList.toggle("is-invalid",!r&&s!==""),l&&s!==""){const c=document.createElement("div");c.className="dynamic-feedback text-danger small mt-1",c.textContent=l,i.parentNode.appendChild(c)}}function n(a){a.preventDefault(),a.stopPropagation();const i=new FormData(e),s=Object.fromEntries(i);e.checkValidity()&&(o(s),e.reset(),e.classList.remove("was-validated")),e.classList.add("was-validated")}function o(a){const i=g("success",`✅ Thank you, ${a.name}! Your message has been received.`,"In a real application, this would be processed by a server.");e.parentNode.insertBefore(i,e),setTimeout(()=>{i.remove()},5e3)}}function v(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t){return new bootstrap.Tooltip(t)})}function w(){const e=document.createElement("div");e.className="scroll-progress",e.innerHTML='<div class="scroll-progress-bar"></div>',document.body.appendChild(e),window.addEventListener("scroll",d(()=>{const n=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100,o=e.querySelector(".scroll-progress-bar");o&&(o.style.width=`${Math.min(n,100)}%`)},16));const t=document.createElement("button");t.className="btn btn-primary btn-back-to-top position-fixed",t.innerHTML='<i class="fas fa-arrow-up"></i>',t.style.cssText=`
        bottom: 20px;
        right: 20px;
        z-index: 1050;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `,document.body.appendChild(t),window.addEventListener("scroll",d(()=>{window.scrollY>300?(t.style.opacity="1",t.style.visibility="visible"):(t.style.opacity="0",t.style.visibility="hidden")},100)),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function y(){const e=document.createElement("button");e.className="btn btn-outline-secondary btn-sm dark-mode-toggle",e.innerHTML='<i class="fas fa-moon"></i>',e.title="Toggle Dark Mode";const t=document.querySelector(".navbar .container");t&&(e.style.cssText="position: absolute; top: 10px; right: 10px;",t.style.position="relative",t.appendChild(e)),localStorage.getItem("theme")==="dark"&&(document.body.classList.add("dark-theme"),e.innerHTML='<i class="fas fa-sun"></i>'),e.addEventListener("click",()=>{document.body.classList.toggle("dark-theme");const o=document.body.classList.contains("dark-theme");e.innerHTML=o?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>',localStorage.setItem("theme",o?"dark":"light")})}function k(){const e=["🚀 Welcome to Task 2 - Templating Engine Demo!","✨ Built with Nunjucks + Vite for modern web development","📱 Fully responsive design with Bootstrap 5","⚡ Lightning-fast development with hot reloading"];if(console.group("🎯 Project Information"),e.forEach(t=>console.log(t)),console.log("👤 Developer: MANCHALA-SRAVAN-KUMAR"),console.log("📅 Year: "+new Date().getFullYear()),console.log("🛠️  Tech Stack: Nunjucks, Vite, Bootstrap 5, Vanilla JS"),console.groupEnd(),performance&&performance.timing){const t=performance.timing.loadEventEnd-performance.timing.navigationStart;console.log(`⏱️  Page loaded in ${t}ms`)}}function d(e,t){let n;return function(){const o=arguments,a=this;n||(e.apply(a,o),n=!0,setTimeout(()=>n=!1,t))}}function u(e,t){let n;return function(...a){const i=()=>{clearTimeout(n),e(...a)};clearTimeout(n),n=setTimeout(i,t)}}function g(e,t,n){const o=document.createElement("div");return o.className=`alert alert-${e} alert-dismissible fade show mb-4`,o.innerHTML=`
        <strong>${t}</strong>
        ${n?`<br><small>${n}</small>`:""}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `,o}function x(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}const T=`
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
`,p=document.createElement("style");p.textContent=T;document.head.appendChild(p);if(!document.querySelector('link[href*="fontawesome"]')){const e=document.createElement("link");e.rel="stylesheet",e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",document.head.appendChild(e)}window.TemplatingDemo={throttle:d,debounce:u,createAlert:g,formatNumber:x};
