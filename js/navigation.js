/* Keep the existing page IDs and support direct links and browser history. */
const sectionPages = { projects: 'learnings', research: 'learnings', skills: 'learnings', achievements: 'learnings' };

function setMobileMenu(open) {
  document.getElementById('mobileNav').classList.toggle('hidden', !open);
  const toggle = document.getElementById('menuToggle');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

function navigateFromHash(moveFocus = true) {
  const hash = window.location.hash.slice(1);
  if (hash === 'pageColumn') {
    if (!currentPage) renderPage('about');
    document.getElementById('pageColumn').focus();
    return;
  }
  const pageId = Object.hasOwn(sectionPages, hash) ? sectionPages[hash] : (Object.hasOwn(pageRenderers, hash) ? hash : 'about');
  if (currentPage !== pageId) renderPage(pageId);
  setMobileMenu(false);
  if (moveFocus || Object.hasOwn(sectionPages, hash)) {
    const target = document.getElementById(Object.hasOwn(sectionPages, hash) ? hash : 'pageTitle');
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start' });
  }
}

function createNextArrow(targetPageId, label) {
  const link = document.createElement('a');
  link.className = 'next-arrow';
  link.href = '#' + targetPageId;
  link.innerHTML = '<span>' + label + '</span><span aria-hidden="true">→</span>';
  return link;
}
