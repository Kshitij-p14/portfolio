// ========================================
// Book Portfolio Interactive System
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const landingPage = document.getElementById('landing-page');
    const bookPortfolio = document.getElementById('book-portfolio');
    const book = document.getElementById('book');
    const closeBookBtn = document.getElementById('closeBook');
    const flipbook = document.getElementById('flipbook');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    
    let currentPage = 0;
    const totalPages = pages.length;
    
    // ========================================
    // Open Book from Landing Page
    // ========================================
    book.addEventListener('click', function() {
        landingPage.classList.add('hide');
        setTimeout(() => {
            landingPage.style.display = 'none';
            bookPortfolio.classList.add('active');
            showPage(0);
        }, 500);
    });
    
    // ========================================
    // Close Book - Return to Landing
    // ========================================
    closeBookBtn.addEventListener('click', function() {
        bookPortfolio.classList.remove('active');
        landingPage.style.display = 'flex';
        setTimeout(() => {
            landingPage.classList.remove('hide');
        }, 100);
        currentPage = 0;
    });
    
    // ========================================
    // Page Navigation
    // ========================================
    function showPage(pageIndex) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
            page.classList.remove('flipped');
        });
        
        // Show current page
        if (pageIndex >= 0 && pageIndex < totalPages) {
            pages[pageIndex].classList.add('active');
            currentPage = pageIndex;
        }
        
        // Update page indicator
        updatePageIndicator();
        
        // Update navigation buttons
        updateNavButtons();
        
        // Add page turn animation
        addPageTurnEffect(pageIndex);
    }
    
    function addPageTurnEffect(pageIndex) {
        const currentPageEl = pages[pageIndex];
        currentPageEl.style.animation = 'pageFlip 0.6s ease-out';
        
        setTimeout(() => {
            currentPageEl.style.animation = '';
        }, 600);
    }
    
    // ========================================
    // Navigation Buttons
    // ========================================
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
            pages[currentPage].classList.add('flipped');
            showPage(currentPage + 1);
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            pages[currentPage - 1].classList.remove('flipped');
            showPage(currentPage - 1);
        }
    });
    
    // ========================================
    // Update Navigation State
    // ========================================
    function updateNavButtons() {
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }
    
    function updatePageIndicator() {
        pageIndicator.textContent = `Page ${currentPage + 1} of ${totalPages}`;
    }
    
    // ========================================
    // Keyboard Navigation
    // ========================================
    document.addEventListener('keydown', function(e) {
        if (!bookPortfolio.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            e.preventDefault();
            if (currentPage < totalPages - 1) {
                nextBtn.click();
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            if (currentPage > 0) {
                prevBtn.click();
            }
        } else if (e.key === 'Escape') {
            closeBookBtn.click();
        } else if (e.key === 'Home') {
            e.preventDefault();
            showPage(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            showPage(totalPages - 1);
        }
    });
    
    // ========================================
    // Touch/Swipe Navigation for Mobile
    // ========================================
    let touchStartX = 0;
    let touchEndX = 0;
    
    flipbook.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    flipbook.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0 && currentPage > 0) {
                // Swipe right - previous page
                prevBtn.click();
            } else if (swipeDistance < 0 && currentPage < totalPages - 1) {
                // Swipe left - next page
                nextBtn.click();
            }
        }
    }
    
    // ========================================
    // Mouse Wheel Navigation
    // ========================================
    let wheelTimeout;
    flipbook.addEventListener('wheel', function(e) {
        if (!bookPortfolio.classList.contains('active')) return;
        
        e.preventDefault();
        
        clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
            if (e.deltaY > 0 && currentPage < totalPages - 1) {
                nextBtn.click();
            } else if (e.deltaY < 0 && currentPage > 0) {
                prevBtn.click();
            }
        }, 50);
    });
    
    // ========================================
    // Page Turn Sound Effect (Optional)
    // ========================================
    function playPageTurnSound() {
        // You can add a page turn sound effect here
        // const audio = new Audio('page-turn.mp3');
        // audio.volume = 0.3;
        // audio.play().catch(() => {});
    }
    
    // ========================================
    // Smooth Page Transitions
    // ========================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pageFlip {
            0% {
                opacity: 0.8;
                transform: perspective(1200px) rotateY(-5deg);
            }
            50% {
                opacity: 0.9;
                transform: perspective(1200px) rotateY(0deg) scale(1.02);
            }
            100% {
                opacity: 1;
                transform: perspective(1200px) rotateY(0deg) scale(1);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // External Links - Open in New Tab
    // ========================================
    const externalLinks = document.querySelectorAll('.page-content a[href^="http"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Links already have target="_blank" in HTML
            // This ensures proper behavior
            if (!this.hasAttribute('target')) {
                this.setAttribute('target', '_blank');
                this.setAttribute('rel', 'noopener noreferrer');
            }
        });
    });
    
    // ========================================
    // Progress Indicator
    // ========================================
    function updateProgress() {
        const progress = ((currentPage + 1) / totalPages) * 100;
        document.documentElement.style.setProperty('--reading-progress', `${progress}%`);
    }
    
    // Add progress bar style
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .book-portfolio::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            width: var(--reading-progress, 0%);
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            transition: width 0.3s ease;
            z-index: 9999;
        }
    `;
    document.head.appendChild(progressStyle);
    
    // Update progress on page change
    const originalShowPage = showPage;
    showPage = function(pageIndex) {
        originalShowPage(pageIndex);
        updateProgress();
    };
    
    // ========================================
    // Print Functionality
    // ========================================
    function printPortfolio() {
        // Show all pages for printing
        pages.forEach(page => {
            page.style.display = 'block';
            page.style.position = 'relative';
            page.style.width = '100%';
        });
        
        window.print();
        
        // Restore original state
        setTimeout(() => {
            showPage(currentPage);
        }, 1000);
    }
    
    // Add print button (optional)
    window.printPortfolio = printPortfolio;
    
    // ========================================
    // Accessibility Improvements
    // ========================================
    // Add ARIA labels
    prevBtn.setAttribute('aria-label', 'Previous page');
    nextBtn.setAttribute('aria-label', 'Next page');
    closeBookBtn.setAttribute('aria-label', 'Close book and return to landing page');
    
    pages.forEach((page, index) => {
        page.setAttribute('role', 'article');
        page.setAttribute('aria-label', `Page ${index + 1} of ${totalPages}`);
    });
    
    // ========================================
    // Auto-save Progress (LocalStorage)
    // ========================================
    function saveProgress() {
        localStorage.setItem('portfolioPage', currentPage);
    }
    
    function loadProgress() {
        const savedPage = localStorage.getItem('portfolioPage');
        if (savedPage !== null) {
            const pageNum = parseInt(savedPage);
            if (pageNum >= 0 && pageNum < totalPages) {
                showPage(pageNum);
            }
        }
    }
    
    // Save progress on page change
    const originalNextClick = nextBtn.onclick;
    nextBtn.addEventListener('click', saveProgress);
    prevBtn.addEventListener('click', saveProgress);
    
    // Optional: Load progress on book open
    // loadProgress(); // Uncomment to enable auto-resume
    
    // ========================================
    // Performance Optimization
    // ========================================
    // Lazy load page content
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, { threshold: 0.1 });
    
    pages.forEach(page => observer.observe(page));
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c📖 Welcome to Kshitij\'s Portfolio Book!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
    console.log('%cNavigation Tips:', 'font-size: 14px; color: #60a5fa; font-weight: bold;');
    console.log('• Use Arrow Keys or Page Up/Down to navigate');
    console.log('• Press ESC to close the book');
    console.log('• Swipe left/right on mobile devices');
    console.log('• Use Home/End keys to jump to first/last page');
    
    // ========================================
    // Initialize
    // ========================================
    updateNavButtons();
    updatePageIndicator();
});
