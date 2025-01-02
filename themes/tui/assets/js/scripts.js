// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Apply saved preference if it exists
if (localStorage.getItem('darkMode') === 'true') {
    darkModeToggle.checked = true;
    document.body.classList.add('dark-mode');
}

// Toggle class on change
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkModeToggle.checked);
});
