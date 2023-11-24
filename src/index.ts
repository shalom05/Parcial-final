import "./components/export"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        const Users = this.ownerDocument.createElement("app-users");
        this.shadowRoot?.appendChild(Users);

    }
}

customElements.define('app-container', AppContainer)