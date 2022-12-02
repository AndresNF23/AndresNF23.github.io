var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addPost } from "../../../../../services/db.js";
export class NewPost extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.post = "";
        this.usercomment = "";
        this.hashtag = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.post && this.usercomment && this.hashtag) {
                const postData = {
                    username: this.username,
                    post: this.post,
                    usercomment: this.usercomment,
                    hashtag: this.hashtag
                };
                try {
                    yield addPost(postData);
                    alert("El post se creo correctamente");
                    const evt = new CustomEvent("form-fullfilled", { composed: true });
                    this.dispatchEvent(evt);
                }
                catch (error) {
                    console.error(error);
                    alert("Ocurrio un error, vuelva a intentar");
                }
            }
            else {
                alert("Complete todos los campos");
            }
        }));
        const usernameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#username');
        const postInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#post');
        const usercommentInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#usercomment');
        const hashtagInput = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('#hashtag');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.username = value;
        });
        postInput === null || postInput === void 0 ? void 0 : postInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.post = value;
        });
        usercommentInput === null || usercommentInput === void 0 ? void 0 : usercommentInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.usercomment = value;
        });
        hashtagInput === null || hashtagInput === void 0 ? void 0 : hashtagInput.addEventListener("change", (event) => {
            const value = event.target.value || "";
            this.hashtag = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link href="./components/Home/style.css" rel="stylesheet">
        <div class="formpost">
        <article>
        <div class="input">
        <input class="inputF" type="text" placeholder="username" id="username"/>
        </div>
        <div class="input">
        <input class="inputF" type="text" placeholder="post" id="post"/>
        </div>
        <div class="input">
        <input class="inputF" type="text" placeholder="usercommet" id="usercommet"/>
        </div>
        <div class="input">
        <input class="inputF" type="text" placeholder="hashtag" id="hashtag"/>
        </div>
        <button type="submit">Crear nuevo post</button>

        </article>
        </div>
        `;
    }
}
customElements.define("app-new-post", NewPost);
