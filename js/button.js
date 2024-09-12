class GoldenButton extends HTMLElement {
    static observedAttributes = [
        "href", "start-icon",
        "end-icon", "label", "theme",
    ];

    constructor() {
        super();

        this.href = ""
        this.theme = ""
        this.startIcon = ""
        this.endIcon = ""
        this.label = ""
    }

    connectedCallback() {
        var icons = ""
        if (this.startIcon != "") {
            icons += " start-icon"
        }
        if (this.endIcon != "") {
            icons += " end-icon"
        }
        this.theme += icons

        this.innerHTML = `
<a href=\"${this.href}\" class=\"button ${this.theme}\"> 
    <div class="state-layer"></div>
    <div class="button__content">
        ${this.startIcon}
        <span class="body__bold p-top__2xs">${this.label}</span>
        ${this.endIcon}
    </div>
</a>
`
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "href":
                this.href = newValue
                break
            case "start-icon":
                this.startIcon = `<div class=\"material-symbols-outlined\">${newValue}</div>`
                break
            case "end-icon":
                this.endIcon = `<div class=\"material-symbols-outlined\">${newValue}</div>`
                break
            case "label":
                this.label = newValue
                break
            case "theme":
                this.theme = newValue
                break
        }
    }
}

customElements.define("golden-button", GoldenButton);

