import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["newpost"] = 3] = "newpost";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        this.setEventListeners();
    }
    setEventListeners() {
        var _a, _b, _c, _d;
        const GoSignUp = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-register");
        GoSignUp === null || GoSignUp === void 0 ? void 0 : GoSignUp.addEventListener("register-success", () => {
            this.screen = Screens.login;
            this.render();
            this.setEventListeners();
        });
        const login = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });
        const newpost = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("app-new-post");
        login === null || login === void 0 ? void 0 : login.addEventListener("form-fullfilled", () => {
            console.log('se llamo afuera');
            this.screen = Screens.home;
            this.render();
            this.setEventListeners();
        });
        const Menu = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("my-menu");
        Menu === null || Menu === void 0 ? void 0 : Menu.addEventListener('new-post', () => {
            this.screen = Screens.newpost;
            this.render();
            this.setEventListeners();
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
