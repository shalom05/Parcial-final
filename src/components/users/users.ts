export enum AttributesUsers {
    "name" = "name",
    "color" = "color",
    "letter" = "letter",
    "btn" = "btn"
}

export default class Users extends HTMLElement {
    name: string = "";
    color: string = "";
    letter: string = "";
    btn: string = "";

    static get observedAttributes(){
        const attrs: Record<AttributesUsers, null> = {
            name: null,
            color: null,
            letter: null,
            btn: null,
        }
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: AttributesUsers, olValue: string | undefined, newValue: string){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){this.shadowRoot.innerHTML = `
           <section>
           <input>${this.name}<input>
           <input>${this.color}<input>
           <input>${this.letter}<input>
           <button>${this.btn}</button>
           </section>`
        }
    }

}

customElements.define('app-users', Users)