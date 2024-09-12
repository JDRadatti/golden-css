function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
    if (localStorageTheme !== null) {
        console.log('theme', localStorageTheme)
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString(localStorageTheme, systemSettingDark);
document.documentElement.setAttribute("data-theme", currentThemeSetting);

/// Button theme HTML 
class ThemeSwitcher extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<style>
#theme-switch {
    position: sticky;
    top: 0;
    right: 0;
    z-index: 1000;
}

#theme {
    position: absolute;
    top: 1em;
    right: 1em;
}
</style>
<button id="theme"
    data-theme-picker 
    class="button start-icon end-icon bg-success"
    aria-label="${newCta}">
    <div class="button__content">
        <div class=\"material-symbols-filled\">light_mode</div>
        <div class=\"material-symbols-filled\">dark_mode</div>
    </div>
</button>
        `;
    }
}

customElements.define('theme-switcher', ThemeSwitcher);

// Theme switcher event listener
const button = document.querySelector("#theme-switch");
var newCta = "";
if (button !== null) {
    button.addEventListener("click", () => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

        // update the button text
        newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";

        // use an aria-label if you are omitting text on the button
        // and using sun/moon icons, for example
        button.setAttribute("aria-label", newCta);

        // update theme attribute on HTML to switch theme in CSS
        document.documentElement.setAttribute("data-theme", newTheme);

        // update in local storage
        localStorage.setItem("theme", newTheme);

        // update the currentThemeSetting in memory
        currentThemeSetting = newTheme;
    });
}
