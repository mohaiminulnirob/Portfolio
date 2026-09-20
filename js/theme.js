/* Theme storage is optional; the portfolio also works when storage is blocked. */
function applyTheme(theme) {
  const dark = theme === 'dark';
  document.body.classList.toggle('dark-mode', dark);
  document.getElementById('themeIcon').className = dark ? 'fa fa-sun-o' : 'fa fa-moon-o';
  const toggle = document.getElementById('themeToggle');
  toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  toggle.setAttribute('aria-pressed', String(dark));
  try { localStorage.setItem('portfolioTheme', dark ? 'dark' : 'light'); } catch { /* Use the theme for this visit. */ }
}

let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolioTheme') || 'dark'; } catch { /* Default to dark. */ }
applyTheme(savedTheme);
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
});
