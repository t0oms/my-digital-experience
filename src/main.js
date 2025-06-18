const html = document.documentElement;
const toggleButton = document.getElementById('nav-toggle');
const darkModeToggle = document.getElementById('theme-toggle');
const mobileMenu = document.getElementById('mobile-menu');

let currentTheme = 'light';

function setTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    currentTheme = theme;
}

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

darkModeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
}