// Page Content Data
const pages = [
    { left: 1, right: 1 },  // Page 1
    { left: 2, right: 2 },  // Page 2
    { left: 3, right: 3 },  // Page 3
    { left: 4, right: 4 },  // Page 4
    { left: 5, right: 5 },  // Page 5
];

let currentPageIndex = 0;

// Elements
const landing = document.getElementById('landing');
const bookOpen = document.getElementById('bookOpen');
const closedBook = document.getElementById('closedBook');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNum = document.getElementById('pageNum');
const leftContent = document.getElementById('leftContent');
const rightContent = document.getElementById('rightContent');
const rightPage = document.getElementById('rightPage');

// Open book
closedBook.addEventListener('click', () => {
    landing.classList.add('hide');
    setTimeout(() => {
        landing.style.display = 'none';
        bookOpen.classList.add('active');
        loadPage(currentPageIndex);
    }, 800);
});

// Close book
closeBtn.addEventListener('click', () => {
    bookOpen.classList.remove('active');
    landing.style.display = 'flex';
    setTimeout(() => {
        landing.classList.remove('hide');
    }, 100);
    currentPageIndex = 0;
});

// Load page content
function loadPage(index) {
    const page = pages[index];
    
    // Get templates
    const leftTemplate = document.querySelector(`[data-page="${page.left}"][data-side="left"]`);
    const rightTemplate = document.querySelector(`[data-page="${page.right}"][data-side="right"]`);
    
    // Clear and load left page
    if (leftTemplate) {
        leftContent.innerHTML = leftTemplate.innerHTML;
    }
    
    // Clear and load right page
    if (rightTemplate) {
        rightContent.innerHTML = rightTemplate.innerHTML;
    }
    
    // Update page number
    pageNum.textContent = `${index + 1} / ${pages.length}`;
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
}

// Next page
nextBtn.addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
        // Add flip animation
        rightPage.classList.add('flipping');
        
        setTimeout(() => {
            currentPageIndex++;
            loadPage(currentPageIndex);
            rightPage.classList.remove('flipping');
        }, 400);
    }
});

// Previous page
prevBtn.addEventListener('click', () => {
    if (currentPageIndex > 0) {
        rightPage.classList.add('flipping');
        
        setTimeout(() => {
            currentPageIndex--;
            loadPage(currentPageIndex);
            rightPage.classList.remove('flipping');
        }, 400);
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (bookOpen.classList.contains('active')) {
        if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'Escape') {
            closeBtn.click();
        }
    }
});

// Initialize
loadPage(currentPageIndex);
