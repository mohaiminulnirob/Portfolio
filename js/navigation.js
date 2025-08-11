/* ===== Navigation Handling ===== */
function handleNavigation(evt) {
  evt.preventDefault();
  const pageId = this.getAttribute('data-page');
  
  // Update active state
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  this.classList.add('active');
  
  // Hide mobile menu if open
  document.getElementById('mobileNav').classList.add('hidden');
  
  // Render the new page
  renderPage(pageId);
}

// Helper function to create navigation arrows
function createNextArrow(targetPageId) {
  const arrow = document.createElement('div');
  arrow.className = 'next-arrow';
  arrow.innerHTML = `<i class="fa fa-arrow-right"></i>`;
  arrow.style.marginTop = '10px';
  arrow.style.alignSelf = 'flex-end';

  arrow.addEventListener('click', () => {
    const targetLink = document.querySelector(`.nav-link[data-page="${targetPageId}"]`);
    if (targetLink) targetLink.click();
  });

  return arrow;
}