let _moduloHTTP = require("http") // Objeto
let _moduloArchivos = require( "fs" ) ; // object

console.log( "Iniciando servidor" ) ;
let _servidor = _moduloHTTP.createServer( fnGestor ) ; // Es un objeto
_servidor.listen( 3000, fnServidorListo ) ;

function fnGestor(_peticion, _respuesta) {
    console.log("Algún cliente pidió un recurso");
    let _pedido = _peticion.url;
    console.log("Pidió el recurso " + _pedido);

    if (_pedido == "/canciones") {
        let _contenido = _moduloArchivos.readFileSync("canciones.txt");
        let canciones = _contenido.toString().split("\n");

        let htmlResponse = "<html><body><h1>Lista de Canciones</h1><ul>";
        canciones.forEach(cancion => {
            htmlResponse += `<li>${cancion}</li>`;
        });
        htmlResponse += "</ul></body></html>";

        _respuesta.writeHead(200, { "Content-Type": "text/html" });
        _respuesta.write(htmlResponse);
        _respuesta.end();
        return;
    }

    else if (_pedido == "/artistas") {
        let _contenido = _moduloArchivos.readFileSync("Artistas.txt");
        let artistas = _contenido.toString().split("\n");

        let htmlResponse = "<html><body><h1>Lista de Artistas</h1><ul>";
        artistas.forEach(nombre => {
            htmlResponse += `<li>${nombre}</li>`;
        });
        htmlResponse += "</ul></body></html>";

        _respuesta.writeHead(200, { "Content-Type": "text/html" });
        _respuesta.write(htmlResponse);
        _respuesta.end();
        return;
    }

    else if (_pedido.startsWith("/artista/")) {
        let partes = _pedido.split("/");
        let nombreBuscado = decodeURIComponent(partes[2]).toLowerCase();

        let _cancionesContenido = _moduloArchivos.readFileSync("canciones.txt", "utf8");
        let _artistasContenido = _moduloArchivos.readFileSync("Artistas.txt", "utf8");

        let canciones = _cancionesContenido.split("\n").filter(linea => linea.trim() !== "");
        let artistas = _artistasContenido.split("\n").filter(linea => linea.trim() !== "");

        let index = artistas.findIndex(a => a.trim().toLowerCase() === nombreBuscado);

        if (index !== -1) {
            let nombreArtista = artistas[index];
            let inicio = index * 10;
            let cancionesArtista = canciones.slice(inicio, inicio + 10);

            let htmlResponse = `
                <html>
                <head><title>${nombreArtista}</title></head>
                <body>
                    <h1>${nombreArtista}</h1>
                    <ul>
                        ${cancionesArtista.map(c => `<li>${c}</li>`).join("\n")}
                    </ul>
                </body>
                </html>
            `;

            _respuesta.writeHead(200, { "Content-Type": "text/html" });
            _respuesta.write(htmlResponse);
        } else {
            _respuesta.writeHead(404, { "Content-Type": "text/html" });
            _respuesta.write(`<h1>No se encontró el artista "${nombreBuscado}"</h1>`);
        }

        _respuesta.end();
        return;
    }

    // Si no coincide con nada
    _respuesta.writeHead(404, { "Content-Type": "text/plain" });
    _respuesta.write("Recurso no encontrado");
    _respuesta.end();
}


function fnServidorListo() {
    console.log( "El servidor está listo en" )  ;
    console.log( "    http://localhost:3000" ) ;
}