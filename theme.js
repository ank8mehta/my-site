const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);
toggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
