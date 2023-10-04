class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    };

    build() {
        // componentRoot sendo chamado por Card
        const Card = document.createElement("div");
        Card.setAttribute("class", "card");

        // criação da class e seu valor
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        // criação da propriedade autor que recebe a tag span e concatena com o anonymus casa não autor não tenha recebido valor
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || " Anonymus");

        // criação da propriedade linkTitle que recebe a tag e a ancora href
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        // criação da propriedade newsContent que recebe a tag p
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        //abaixo estão sendo pendurados os fihos (autor, linkTitle e newsContent) no elemento pai cardLeft
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // criação da class e seu valor
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        // criação da propriedade newsImage que recebe img e seus atributos src e alt, e se não tiver nenhuma propriedade vai mostrar a foto default
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/img/photo-default.jpg";
        newsImage.alt = "man watching the sky";
        cardRight.appendChild(newsImage);

        // elementos filhos cardLeft e cardRight sendo pendurados no elemento pai Card
        Card.appendChild(cardLeft);
        Card.appendChild(cardRight);

        return Card;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 8px 12px 37px -14px rgba(0, 27, 95, 0.76);
            -webkit-box-shadow: 8px 12px 37px -14px rgba(0, 27, 95, 0.7 6);
            -moz-box-shadow: 8px 12px 37px -14px rgba(0, 27, 95, 0.76);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        img {
            width: 200px;
        }

        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 1rem;
        }

        .card-left span {
            font-weight: 400;
        }

        .card-left a {
            margin-top: 1rem;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: 500;
            padding-bottom: 0.625rem;
        }

        .card-left p {
            color: #554;
        }
    `;
        return style;
    }
}

customElements.define("card-news", Cardnews);
