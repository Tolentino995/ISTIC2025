let _moduloHTTP = require("http");

console.log("Servidor... Configurando");
console.log("Por favor, espere");

let _servidor = _moduloHTTP.createServer(fnGestor);
_servidor.listen(3000, fnServidorListo);

function fnGestor(_req, _res) {
    console.log("Pidieron " + _req.url);
    let _reqUrl = _req.url;

    let ahora = new Date();

    let horas = ahora.getHours().toString().padStart(2, "0");
    let minutos = ahora.getMinutes().toString().padStart(2, "0");
    let segundos = ahora.getSeconds().toString().padStart(2, "0");

    let dia = ahora.getDate().toString().padStart(2, "0");
    let mes = (ahora.getMonth() + 1).toString().padStart(2, "0");
    let anio = ahora.getFullYear();

    if (_reqUrl.startsWith("/saludar/")) {
        let partes = _reqUrl.split("/");
        let nombre = partes[2];
    
        if (!nombre) {
            _res.writeHead(400, { "Content-Type": "text/plain" });
            _res.end("Falta el nombre a saludar.");
            return;
        }
    
        let saludo = `Hola ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}, ¡bienvenida!`;
    
        if (partes[3] && partes[3].toLowerCase() === "json") {
            _res.writeHead(200, { "Content-Type": "application/json" });
            _res.end(JSON.stringify({ saludo: saludo }, null, 2));
        } else {
            _res.writeHead(200, { "Content-Type": "text/plain" });
            _res.end(saludo);
        }
    
        return;
    }
    if (_req.url === "/hora") {
        let horaTexto = `La hora actual del servidor es: ${horas}:${minutos}:${segundos}`;
        _res.writeHead(200, { "Content-Type": "text/plain" });
        _res.end(horaTexto);
        return;
    }

    if (_req.url === "/fecha") {
        let fechaTexto = `La fecha actual del servidor es: ${dia}/${mes}/${anio}`;
        _res.writeHead(200, { "Content-Type": "text/plain" });
        _res.end(fechaTexto);
        return;
    }

    if (_req.url === "/hora/json") {
        let jsonHora = {
            hora: ahora.getHours(),
            minutos: ahora.getMinutes(),
            segundos: ahora.getSeconds()
        };
        _res.writeHead(200, { "Content-Type": "application/json" });
        _res.end(JSON.stringify(jsonHora, null, 2));
        return;
    }

    if (_req.url === "/fecha/json") {
        let jsonFecha = {
            dia: ahora.getDate(),
            mes: ahora.getMonth() + 1,
            año: ahora.getFullYear()
        };
        _res.writeHead(200, { "Content-Type": "application/json" });
        _res.end(JSON.stringify(jsonFecha, null, 2));
        return;
    }
    if (_req.url ==="/actual") {
        let actualTexto = `Hoy es ${dia}/${mes}/${anio} y son las ${horas}:${minutos}:${segundos}`;
        _res.writeHead(200, { "Content-Type": "text/plain" });
        _res.end(actualTexto);
        return
    }
    if (_req.url === "/actual/json"){
        let jsonActual = {
            fecha: {
                dia: ahora.getDate(),
                mes: ahora.getMonth() +1,
                año: ahora.getFullYear()
            },
            hora: {
                hora: ahora.getHours(),
                minutos: ahora.getMinutes(),
                segundos: ahora.getSeconds()
            }              
        }
        _res.writeHead(200, { "Content-Type": "application/json "});
        _res.end(JSON.stringify(jsonActual,null,2));
    }
    if (_reqUrl.startsWith("/edad/")) {
        let partes = _reqUrl.split("/");
        let anioNacimiento = parseInt(partes[2]); 

        if (isNaN(anioNacimiento)) {
            _res.statusCode = 400;
            _res.end("Año de nacimiento inválido");
            return;
        }

        const edad = anio - anioNacimiento;
        const respuestaTexto = `Tienes ${edad} años (naciste en ${anioNacimiento})`;

        if (partes[3] && partes[3].toLowerCase() === "json") {
            _res.writeHead(200, { "Content-Type": "application/json" });
            _res.end(JSON.stringify({
                anioNacimiento: anioNacimiento,
                edad: edad,
                anioActual: anio
            }, null, 2)); 
        } else {
            _res.writeHead(200, { "Content-Type": "text/plain" });
            _res.end(respuestaTexto);
        }
    }
    if (_reqUrl.startsWith("/cuadrado/")){
        let partes = _reqUrl.split("/");
        let numCuadrado = parseInt(partes[2]);

        if (isNaN(numCuadrado)){
            _res.statusCode = 400;
            _res.end("Lo que ingreso no es un número");
            return
        }

        const resultadoNumCuadrado = numCuadrado * numCuadrado;
        const respuestaTexto = `El cuadrado de ${numCuadrado} es: ${resultadoNumCuadrado}`;

        if (partes[3] && partes[3].toLowerCase() === "json") {
            _res.writeHead(200, { "Content-Type": "application/json" });
            _res.end(JSON.stringify({
                numCuadrado : numCuadrado,
                resultadoNumCuadrado
            }, null, 2));
        } else {
            _res.writeHead(200, { "Content-Type": "text/plain" });
            _res.end(respuestaTexto);
        }
    }
    // Ejercicio 9 
    if (_reqUrl.startsWith("/aleatorio/")) {
        let partes = _reqUrl.split("/");
        let max = parseInt(partes[2]);

        if (isNaN(max) || max < 0){
            _res.statusCode = 400;
            _res.end("El número máximo no es válido");
            return;
        }

        const numAleatorio = Math.floor(Math.random() * (max + 1));
        const respuestaTexto =  `El número aleatorio es entre 0 y ${max} : ${numAleatorio}`;

        if (partes[3] && partes[3].toLowerCase() === "json"){
            _res.writeHead(200, { "Content-Type": "application/json" });
            _res.end(JSON.stringify({
                maximo: max,
                numeroAleatorio: numAleatorio
            }, null, 2));
        }else{
            _res.writeHead(200, { "Content-Type": "text/plain" });
            _res.end(respuestaTexto);
        }
    }
    else {
        _res.writeHead(404, { "Content-Type": "text/plain" });
        _res.end("Recurso no encontrado: " + _req.url);
    }
}

function fnServidorListo() {
    console.log("El servidor ya funciona");
    console.log("Visita http://127.0.0.1:3000");
    console.log("O http://localhost:3000");
}