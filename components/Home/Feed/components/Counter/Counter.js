export var CAttribute;
(function (CAttribute) {
    CAttribute["likes"] = "likes";
})(CAttribute || (CAttribute = {}));
class MyCounter extends HTMLElement {
    constructor() {
        super();
        //count: number = this.likes;
        this.numberLikes = 0;
        this.handleClick = () => {
            // this.numberLikes = this.likes+=1;
            this.numberLikes = this.numberLikes += 1;
            console.log(this.numberLikes + "likes");
            this.render();
        };
        var heart = document.getElementById('heart');
        this.attachShadow({ mode: 'open' });
        this.button = this.ownerDocument.createElement("img");
        this.button.setAttribute('src', "./components/Home/Feed/components/Profile/Imgs/heart_red.png");
        this.button.className = "other";
        this.button.id = "heart";
        this.button.addEventListener("click", this.handleClick);
    }
    static get observedAttributes() {
        const attrs = {
            likes: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    /*
export enum CAttribute {
    "username" = "username",
    "ubication" = "ubication",
    "profilepic" = "profilepic",
    "post" = "post",
    "usercomment" = "usercomment",
    "hashtag" = "hashtag",
    "likes" = "likes",
    "date" = "date",

}

class MyCounter extends HTMLElement {
    username?: string;
    ubication?: string;
    profilepic?: string;
    post?: string;
    usercomment?: string;
    hashtag?: string;
    likes?: number;
    date?: string;
    button: HTMLElement;
    numberLikes: number;

    static get observedAttributes() {
        const attrs: Record<CAttribute, null> = {
            username: null,
            ubication: null,
            profilepic: null,
            post: null,
            usercomment: null,
            hashtag: null,
            likes: null,
            date: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        var heart = document.getElementById('heart');

        this.button = this.ownerDocument.createElement("img");
        this.button.setAttribute('src', "./components/Home/Feed/components/Profile/Imgs/heart_red.png")
        this.button.className = "other";
        this.button.id = "heart";
        this.button.addEventListener("click", this.handleClick);
        this.numberLikes = this.likes;
        console.log(this.numberLikes + "likes")
    }
 

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: CAttribute,
        oldValue: string | undefined,
        newValue: string | undefined,
    ) {
        switch (propName) {
            case CAttribute.likes:
                this.likes = newValue ? Number(newValue) : undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        }

        this.render();
    }
    handleClick= () =>{
        this.numberLikes = this.numberLikes++;
        console.log(this.numberLikes + "likes")
        this.render();
    }
    */
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section class = "counterSection">
            <link href="./components/Home/style.css" rel="stylesheet">
            <article id = "displayCounter">
                <div id = "iconContainer">
                    <img class = "icon1" src="./components/Home/Feed/components/Profile/Imgs/comment.png">
                    <img class = "icon1" src="./components/Home/Feed/components/Profile/Imgs/share.png">
                </div>
                <img class = "icon2" src="./components/Home/Feed/components/Profile/Imgs/swipe.jpg">
                <img class = "icon1" id="bookmark" src="./components/Home/Feed/components/Profile/Imgs/bookmark.png">
            </article> 
            <p class = "likes"> ${this.numberLikes} likes</p>
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }
}
customElements.define("my-counter", MyCounter);
export default MyCounter;
