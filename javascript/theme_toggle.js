// Dark mode toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const icon = document.getElementById('dark-mode-icon');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function setDarkMode(enabled) {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }

  // Initial state
  const userPref = localStorage.getItem('theme');
  const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (userPref === 'dark' || (!userPref && systemPref)) {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(!isDark);
  });
}); 