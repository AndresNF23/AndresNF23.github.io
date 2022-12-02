export var SBAttribute;
(function (SBAttribute) {
    SBAttribute["username"] = "username";
    SBAttribute["profilepic"] = "profilepic";
})(SBAttribute || (SBAttribute = {}));
class MyRecomend extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            profilepic: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link href="./components/Home/style.css" rel="stylesheet">
            <section class = "recommendedSection">
                    <img class = "profilePicture" ${this.profilepic}
                    <article class = "recommendedArticle">
                        <h4 class = "username">${this.username}</h4>
                        <p class = "subtitle2">Recomenado para ti</p>
                    </article>
                    <p class = "followButton"><t>Seguir</t></p>
            </section>
            `;
        }
    }
}
customElements.define("my-slider", MyRecomend);
export default MyRecomend;
