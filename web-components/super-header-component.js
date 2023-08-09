class SuperHeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){

        this.shadowRoot.innerHTML = '';
        const style = document.createElement('style');
        style.innerHTML = `h1{color: ${this.getAttribute('title-color') || 'carbon'}}`;
        this.shadowRoot.appendChild(style);

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.getAttribute('super-title')))
        this.shadowRoot.appendChild(h1);

        // const navbar = document.createElement('nav');
        // const linkMain = document.createElement('a')
        // linkMain.appendChild(document.createTextNode('Torna alla pagina principale ' + '- '))
        // linkMain.href = "./index.html"
        // const link1 = document.createElement('a')
        // link1.appendChild(document.createTextNode('r/aww ' + '- '))
        // link1.href = "./aww.html"
        // const link2 = document.createElement('a')
        // link2.appendChild(document.createTextNode('r/italy '+ '- '))
        // link2.href = "./italy.html"
        // const link3 = document.createElement('a')
        // link3.appendChild(document.createTextNode('r/Minecraft '+ '- '))
        // link3.href = "./minecraft.html"
        // const link4 = document.createElement('a')
        // link4.appendChild(document.createTextNode('r/fromsoftware '+ '- '))
        // link4.href = "./fromsoftware.html"
        // const link5 = document.createElement('a')
        // link5.appendChild(document.createTextNode('r/ProgrammerHumor '+ '- '))
        // link5.href = "./programmerhumor.html"
        // const link6 = document.createElement('a')
        // link6.appendChild(document.createTextNode('r/cats '+ '- '))
        // link6.href = "./cats.html"
        // const link7 = document.createElement('a')
        // link7.appendChild(document.createTextNode('r/StreetFighter '+ '- '))
        // link7.href = "./streetfighter.html"
        // const link8 = document.createElement('a')
        // link8.appendChild(document.createTextNode('r/beer '+ '- '))
        // link8.href = "./beer.html"
        // const link9 = document.createElement('a')
        // link9.appendChild(document.createTextNode('r/tipofmytongue '+ '- '))
        // link9.href = "./tipofmytongue.html"
        // const link10 = document.createElement('a')
        // link10.appendChild(document.createTextNode('r/explainlikeimfive'))
        // link10.href = "./explainlikeimfive.html"
        // navbar.appendChild(linkMain)
        // navbar.appendChild(link1)
        // navbar.appendChild(link2)
        // navbar.appendChild(link3)
        // navbar.appendChild(link4)
        // navbar.appendChild(link5)
        // navbar.appendChild(link6)
        // navbar.appendChild(link7)
        // navbar.appendChild(link8)
        // navbar.appendChild(link9)
        // navbar.appendChild(link10)
        // this.shadowRoot.appendChild(navbar)
    }
}

customElements.define('super-header', SuperHeaderComponent);