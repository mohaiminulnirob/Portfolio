/* ===== Main Application ===== */
let currentPage = 'about';

// Initialize the application
function init() {
  applyTheme(localStorage.getItem('portfolioTheme') || 'light');
  renderPage('about');
  document.querySelector('.nav-link[data-page="about"]').classList.add('active');
  setupEventListeners();
}

// Core rendering function
function renderPage(pageId) {
  currentPage = pageId;
  const pageColumn = document.getElementById('pageColumn');
  pageColumn.innerHTML = '';
  
  switch(pageId) {
    case 'about':
      renderAboutPage(pageColumn);
      break;
    case 'life':
      renderLearningPathPage(pageColumn);
      break;
    case 'learnings':
      renderCompetenciesPage(pageColumn);
      break;
    case 'contact':
      renderContactPage(pageColumn);
      break;
    default:
      renderAboutPage(pageColumn);
  }
}

// Set up all event listeners
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });
  
  // Contact button
  document.getElementById('contactBtn').addEventListener('click', () => {
    document.querySelector('.nav-link[data-page="contact"]').click();
  });
  
  // Download CV button
  document.getElementById('downloadBtn').addEventListener('click', downloadCV);
  
  // Mobile menu toggle
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('hidden');
  });
}

// Download CV function
function downloadCV() {
  const pdfUrl = 'assets/Mohaiminul_Nirob_CV.pdf'; 
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'Mohaiminul_Nirob_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);