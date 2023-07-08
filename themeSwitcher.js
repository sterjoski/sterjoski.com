document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");

    // Check for saved 'theme' in localStorage
    let currentTheme = localStorage.getItem("theme");

    // If there's no saved theme, use the system preference
    if (!currentTheme) {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    }

    // Set the initial theme
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        themeSwitcher.textContent = "Switch to Light Mode";
    } else {
        themeSwitcher.textContent = "Switch to Dark Mode";
    }

    themeSwitcher.addEventListener("click", function () {
        console.log("click");
        currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            themeSwitcher.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeSwitcher.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});
