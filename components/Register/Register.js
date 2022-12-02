import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const clave = evt.detail.clave;
            addUser({ email, clave }).then(value => {
                if (value) {
                    const event = new CustomEvent("register-success", {});
                    console.log(this);
                    this.dispatchEvent(event);
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="Register">
        <link href="./Style.css" rel="stylesheet">
        
            <img class="InstaLogo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">

            <h3 class="Grey">Regístrate para ver fotos y videos de tus amigas</h3>

            <app-form></app-form>

            <h3 class="Grey">O</h3>

            <button>Ingresa Con Facebookk</button>

            <p id="Terms" class="Grey">Al registrarte, aceptas nuestros Términos, <b>política de datos</b> y <b>Política de cookies</b></p>
        </section>
         
        <section>
            <p class="GreySmall"> Meta · Información · Blog · Empleo · Ayuda · API Privacidad · Condiciones · Cuentas destacadas · Hashtags · Ubicaciones · Instagram Lite · Subir contactos y no usuarioss </p>
            <p class="GreySmall">Español ˅  ·  © 2022 Instagram from Meta</p>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
