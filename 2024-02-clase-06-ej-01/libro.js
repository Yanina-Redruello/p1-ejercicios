class Libro {

    constructor(nombre, autor, editorial, portada) {

        // Seteo las propiedades basicas
        this.nombre = nombre;
        this.autor = autor;
        this.editorial = editorial;
        this.portada = portada;

    }

    toHTML() {
        /*

        <div class="card" style="width: 18rem;">
        <img src="${this.portada}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.autor}</p>
            <p class="card-text">${this.editorial}</p>
        </div>
        </div>

        */
        let html = "";
        html += `<div class="card" style="width: 18rem;">\n`;
        html += `<img src="${this.portada}" class="card-img-top" width="100px">\n`;
        html += `<div class="card-body">\n`;
        html += `<h5 class="card-title">${this.nombre}</h5>\n`;
        html += `<p class="card-text">${this.autor}</p>\n`;
        html += `<p class="card-text">${this.editorial}</p>\n`;
        html += `</div>\n`;
        html += `</div>\n`;

        return html;
    }


}