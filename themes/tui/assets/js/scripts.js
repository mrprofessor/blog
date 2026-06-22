// Dark mode toggle
// The initial theme is set pre-paint in <head>; this just wires up the toggle.
const darkModeToggle = document.getElementById('dark-mode-toggle');
const root = document.documentElement;

if (darkModeToggle) {
    // Reflect the already-applied theme in the checkbox.
    darkModeToggle.checked = root.classList.contains('dark-mode');

    darkModeToggle.addEventListener('change', () => {
        root.classList.toggle('dark-mode', darkModeToggle.checked);
        localStorage.setItem('darkMode', darkModeToggle.checked);
    });
}

// Follow the OS preference live, but only while the user hasn't chosen explicitly.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
        root.classList.toggle('dark-mode', e.matches);
        if (darkModeToggle) darkModeToggle.checked = e.matches;
    }
});
