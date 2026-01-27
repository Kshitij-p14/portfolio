// ========================================
// Navigation & Mobile Menu
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(2, 6, 23, 0.95)';
    } else {
        navbar.style.background = 'var(--darker-bg)';
    }
});

// ========================================
// Scroll Reveal Animation
// ========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #10b981;
            color: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            animation: fadeIn 0.3s ease;
        `;
        
        successMessage.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 0.5rem;">Thank You!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
        `;
        
        document.body.appendChild(successMessage);
        
        // Clear form
        contactForm.reset();
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMessage.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 300);
        }, 3000);
    });
}

// ========================================
// Typing Effect for Hero Title (Optional)
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });

// ========================================
// Skill Tags Interaction
// ========================================
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// Project Cards Tilt Effect (Optional)
// ========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// Add fade out animation style
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        to { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    }
`;
document.head.appendChild(style);

// ========================================
// Performance Optimization
// ========================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
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

// Apply debouncing to scroll events
const debouncedReveal = debounce(revealOnScroll, 10);
window.removeEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', debouncedReveal);

// ========================================
// Console Message
// ========================================
console.log('%c👋 Welcome to my Portfolio!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cLooking to connect? Reach out through the contact form!', 'font-size: 14px; color: #60a5fa;');
