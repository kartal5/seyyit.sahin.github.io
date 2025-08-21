const themeButtons = document.getElementsByClassName("theme");
const body = document.querySelector("body");

function setActiveTheme(theme) {
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Set active class
    Array.from(themeButtons).forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

// Add click listeners
Array.from(themeButtons).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        setActiveTheme(e.currentTarget.dataset.theme);
    });
    // Allow keyboard activation
    theme.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            setActiveTheme(e.currentTarget.dataset.theme);
        }
    });
});


function getThemeOnLoad() {
    const storedTheme = localStorage.getItem("theme");
    // Check for user's system preference if no theme is stored
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        setActiveTheme(storedTheme);
    } else if (systemPrefersDark) {
        setActiveTheme("dark");
    } else {
        setActiveTheme("light");
    }
}

getThemeOnLoad();