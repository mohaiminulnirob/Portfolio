/* ===== Theme Handling ===== */
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('themeIcon').className = 'fa fa-sun-o';
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('themeIcon').className = 'fa fa-moon-o';
  }
  localStorage.setItem('portfolioTheme', theme);
}

// Theme toggle event listener
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = localStorage.getItem('portfolioTheme') || 'light';
  applyTheme(current === 'light' ? 'dark' : 'light');
});