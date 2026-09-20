/* Main application: existing four views, rendered into the shared page column. */
let currentPage = null;
const pageRenderers = {
  about: { title: 'About Me', render: renderAboutPage },
  life: { title: 'Learning Path', render: renderLearningPathPage },
  learnings: { title: 'Competencies', render: renderCompetenciesPage },
  contact: { title: 'Contact Me', render: renderContactPage }
};

function renderPage(pageId) {
  currentPage = Object.hasOwn(pageRenderers, pageId) ? pageId : 'about';
  const page = pageRenderers[currentPage];
  const column = document.getElementById('pageColumn');
  column.replaceChildren();
  page.render(column);
  document.title = page.title + ' | Mohaiminul Islam Nirob';
  document.querySelectorAll('.nav-link').forEach(link => {
    const active = link.dataset.page === currentPage;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function init() {
  navigateFromHash(false);
  document.getElementById('copyrightYear').textContent = new Date().getFullYear();
  window.addEventListener('hashchange', () => navigateFromHash());
  document.getElementById('menuToggle').addEventListener('click', () => {
    setMobileMenu(document.getElementById('menuToggle').getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !document.getElementById('mobileNav').classList.contains('hidden')) {
      setMobileMenu(false);
      document.getElementById('menuToggle').focus();
    }
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link && link.hash === window.location.hash) {
      event.preventDefault();
      navigateFromHash();
    }
    if (!event.target.closest('.site-header')) setMobileMenu(false);
  });
  window.matchMedia('(min-width: 921px)').addEventListener('change', event => {
    if (event.matches) setMobileMenu(false);
  });
}

document.addEventListener('DOMContentLoaded', init);
