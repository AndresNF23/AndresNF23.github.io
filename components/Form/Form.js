export class Form extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.clave = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("form-fullfiled", {
                detail: { email: this.email, clave: this.clave },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="email"]');
        const claveInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="clave"]');
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.email = value;
        });
        claveInput === null || claveInput === void 0 ? void 0 : claveInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.clave = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <article class="Form">
        <link href="./Style.css" rel="stylesheet">
            <div>
                <input name="email" type="email" placeholder="Email"/>
            </div>
            <div>
                <input type="clave" placeholder="Contraseña"/>
            </div>
            <button type="submit">Ingresar</button>
        </article>
        `;
    }
}
customElements.define("app-form", Form);
