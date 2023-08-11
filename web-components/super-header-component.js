class SuperHeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = "";
    const style = document.createElement("style");
    style.innerHTML = `h1{color: ${
      this.getAttribute("title-color") || "carbon"
    }}`;
    this.shadowRoot.appendChild(style);

    const h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(this.getAttribute("super-title")));
    this.shadowRoot.appendChild(h1);

    const navbarContainer = document.createElement("div");
    navbarContainer.classList.add("navbar-container"); // Aggiungi una classe
    // navbarContainer.id = 'navbar-container'; // Aggiungi un id
    this.shadowRoot.appendChild(navbarContainer);
  }
}

customElements.define("super-header", SuperHeaderComponent);
