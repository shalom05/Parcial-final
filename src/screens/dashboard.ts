import "../components/export"
import { AttributesUsers } from "../components/users/users";
import { addObserver } from "../store";

export default class Dashboard extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this);
    }

    connectedCallback() {
        
        this.render();
    }

    render(){
            
        if(this.shadowRoot){this.shadowRoot.innerHTML = `holi`}

        const divContainer = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(divContainer);

        const inputName = this.ownerDocument.createElement('input');
        inputName.classList()
        divContainer.appendChild(inputName);




    
    }

}
 customElements.define("my-dashboard", Dashboard);

