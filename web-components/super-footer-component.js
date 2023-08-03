class SuperFooterComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML = `
        
        <p>©Reddit Platform 2023</p>
        `
    }
}

customElements.define('super-footer', SuperFooterComponent);


