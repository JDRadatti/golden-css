function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
    if (localStorageTheme !== null) {
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

var state = ""
if (currentThemeSetting == "light") {
    state = "checked"
}

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
<div style="position: relative">
<fieldset id="theme">
  <label class="title1">
    <input id="theme-input" name="terms" type="checkbox" role="switch" aria-label="${newCta}" ${state}/>
    <div class="icons">
        <div class="material-symbols-filled">light_mode</div>
        <div class="material-symbols-filled">dark_mode</div>
    </div>
  </label>
</fieldset>
</div>
        `;
    }
}

customElements.define('theme-switcher', ThemeSwitcher);

// Theme switcher event listener
var newCta = "";
const themeSwitch = document.querySelector("#theme-switch");
if (themeSwitch !== null) {
    themeSwitch.addEventListener("change", () => {
        const themeInput = document.querySelector("#theme-input");
        var newTheme = ""
        if (themeInput.checked) {
            newTheme = "light";
        } else {
            newTheme = "dark";
        }

        newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
        themeInput.setAttribute("aria-label", newCta);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        currentThemeSetting = newTheme;
    });
}
