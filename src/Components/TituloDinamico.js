class TituloDinamico extends HTMLElement {
    constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //  base componet <h1>Alyce</h1>
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

    // estilizar o component usar ` pra customizar o css dentro
    const style = document.createElement("style");
    style.textContent = `
            h1{
                color: red;
            }
        `;
        
    // enviar para shadow ,appendChild é tipo pendurar um filho nele
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);
