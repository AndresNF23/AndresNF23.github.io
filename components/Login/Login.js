import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
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
            queryUser({ email, clave }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    this.dispatchEvent(event);
                }
            });
        });
    }
    //swal es una alerta personalizada de la librería Sweet Alert, razón por la que TS no lo detecta, pero igual funciona
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section class="Login">
        <link href="./Style.css" rel="stylesheet">
            <img class="InstaLogo" src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png">
            <app-form></app-form>
            <h3 class="Grey">O</h3>
            <h5 class="Blue">Ingresa con Facebookk</h5>
            <h6 class="Blue">¿No recuerdas tu contraseña?
            </h6>
        </section>1
        <section class="GoRegister">
            <p>¿No tienes una cuenta? <t id="Registrate">Registrate</t></p>
        </section>
        <section class="Download">
            <p>Descarga la aplicacion</p>
            <img class="Store" src="https://www.seekpng.com/png/full/22-227594_download-on-the-app-store-badge-available-on.png">
            <img class="Store" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png">
        </section>
        <section>
            <p class="GreySmall"> Meta · Información · Blog · Empleo · Ayuda · API Privacidad · Condiciones · Cuentas destacadas · Hashtags · Ubicaciones · Instagram Lite · Subir contactos y no usuarioss </p>
            <p class="GreySmall">Español ˅  ·  © 2022 Instagram from Meta</p>
        </section>
        `;
    }
}
customElements.define("app-login", Login);
