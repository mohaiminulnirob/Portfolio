// === Variables ===
const navLinks = document.querySelectorAll('.nav-link');
const contactBtn = document.getElementById('contactBtn');
const downloadBtn = document.getElementById('downloadBtn');
const pageColumn = document.getElementById('pageColumn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const mobileNav = document.getElementById('mobileNav');
const menuToggle = document.getElementById('menuToggle');

let currentPage = 'about';

function renderPage(pageId) {
  currentPage = pageId;
  pageColumn.innerHTML = ''; // Clear previous

  if (pageId === 'about') {
    const aboutWrapper = document.createElement('div');
    aboutWrapper.className = 'about-page';

    // Introduction section (half text, half image)
    const introSection = document.createElement('section');
    introSection.className = 'about-intro';
    introSection.innerHTML = `
      <div class="intro-text">
        <h2 class="underline">About</h2>
        <p>
          I am an enthusiastic undergraduate student of Software Engineering with a strong interest in 
          problem-solving, competitive programming, and software development. I enjoy exploring algorithms, 
          building practical projects, and writing clean, maintainable code.
        </p>
      </div>
      <div class="intro-image">
        <img src="files/Nirob_img.jpg" alt="Mohaiminul Islam Nirob">
      </div>
    `;

    // Passion section (full width)
    const passionSection = document.createElement('section');
    passionSection.className = 'about-passion';
    passionSection.innerHTML = `
      <h3 class="underline">Passion</h3>
      <p>
        I enjoy logical thinking and solving challenging problems that require deep analysis and precision. 
        Competitive programming, algorithmic puzzles, and software design fascinate me. I'm driven by curiosity, 
        a desire to improve, and a passion for creating meaningful solutions through code.
      </p>
    `;

    // Arrow to Life Events
    const arrowLink = document.createElement('div');
    arrowLink.className = 'next-arrow';
    arrowLink.innerHTML = `<i class="fa fa-arrow-right"></i>`;
    arrowLink.addEventListener('click', () => {
      document.querySelector('.nav-link[data-page="life"]').click();
    });

    aboutWrapper.appendChild(introSection);
    aboutWrapper.appendChild(passionSection);
    aboutWrapper.appendChild(arrowLink);

    pageColumn.appendChild(aboutWrapper);

  } else if (pageId === 'life') {
    pageColumn.innerHTML = `<h2>Life Events</h2><p>Milestones in my life journey...</p>`;
  } else if (pageId === 'learnings') {
    pageColumn.innerHTML = `<h2>Learnings</h2><p>Technologies, soft skills, and lessons learned...</p>`;
  } else if (pageId === 'projects') {
    pageColumn.innerHTML = `<h2>Projects</h2><p>Featured projects and side work...</p>`;
  } else if (pageId === 'contact') {
    pageColumn.innerHTML = `<h2>Contact</h2><p>Email, phone, social links...</p>`;
  }
}

// Navigation handling
navLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const pageId = link.getAttribute('data-page');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderPage(pageId);
    mobileNav.classList.add('hidden');
  });
});

// Contact button
contactBtn.addEventListener('click', () => {
  document.querySelector('.nav-link[data-page="contact"]').click();
});

// Download CV
downloadBtn.addEventListener('click', () => {
  const pdfUrl = 'files/Mohaiminul_Nirob_CV.pdf'; 
  const a = document.createElement('a');
  a.href = pdfUrl;
  a.download = 'Mohaiminul_Nirob_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Theme toggle
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.className = 'fa fa-sun-o';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.className = 'fa fa-moon-o';
  }
  localStorage.setItem('portfolioTheme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('portfolioTheme') || 'light';
  applyTheme(current === 'light' ? 'dark' : 'light');
});

// Init
(function init() {
  applyTheme(localStorage.getItem('portfolioTheme') || 'light');
  renderPage('about');
  document.querySelector('.nav-link[data-page="about"]').classList.add('active');
})();
