# 📝 Apunte: Creación de un Servidor en Node.js

## 🌟 Objetivo
Este proyecto creo un servidor simple en Node.js, manejando peticiones HTTP y como interactuar con archivos, manejar rutas y responder a solicitudes HTTP.

---

## 📜 Funciones en JavaScript

### 1. isNaN 
Significa "Is Not a Number" (No es un número) es para verificar si un valor no es un 
número válido o no puede convertirse a uno.

```js
isNaN(123);       // false (es un número válido)
isNaN("123");     // false (puede convertirse a número: 123)
isNaN("Hola");    // true (no es un número)
isNaN(NaN);       // true (NaN literalmente significa "Not a Number")
isNaN(undefined); // true (no es convertible a número)
isNaN(null);      // false (null se convierte a 0 en contextos numéricos)
```
---

## 🛠 Herramientas y Métodos Utilizados

### 1. **Node.js**
Node.js es un entorno de ejecución para JavaScript en el lado del servidor. Permite crear servidores web, manejar peticiones HTTP y trabajar con archivos.

### 2. **Módulo `http` de Node.js**
Permite crear un servidor HTTP:

```js
const http = require('http');
```
### 3. **createServer()**
Crear el servidor y define la funcion que maneja las peticioines:

```js
const servidor = http.createServer(fnGestor);
```

### 4. **listen()**
Hacen que el servidor escuche en un puerto determinado:

```js
servidor.listen(3000, fnServidorListo)
```

### 5. **Módulo fs (File System)**
Permite leer, escribir, modificar y eliminar archivos del sistema:

```js
const fs = require('fs')
```

### 6. **readFileSync()**
Lee un archivo de forma sincrónica:

```js
let contenido = fs.readFileSync("nombreDelArchivo.tct","utf8");
```
---

## 🔤 Métodos de manipulación de texto

### 7. split()
Divide una cadena en un arreglo:

```js
let lineas = contenido.split("\n");
```

### 8. filter()
Filtra elementos según una condición:

```js
let canciones = lineas.filter(lineas => linea.trim() !== "");
```

### 9. join()
Convierte un arreglo en una cadena:

```js
let lista = elemento.join("\n");
```

### 10. startsWhith()
Verifica si una cadena comiensza con cienrto texto:

```js
if (_pedido.startsWhith("/artista/") { ... ]
```

### 11. decodeURIComponent() 
Decodificador una parte de la URL con caracter especial:

```js
let nombre = decodeURIComponent(partes[2]).toLowerCase();
```
---

## 📤 Métodos de respuesta (res)

### 12. .writeHead(codigo, cabeceras)
Define el código de estado HTTP y el tipo de contenido.

```js
respuesta.writeHead(200, { "Content-Type": "application/json" });
```

200 → OK
"Content-Type" → Indica si es texto, HTML, JSON, etc.

### 13. .end(contenido)
Finaliza la respuesta y envía datos al cliente.

```js
respuesta.writeHead(200, { "Content-Type": "application/json" });
```

200 → OK
"Content-Type" → Indica si es texto, HTML, JSON, etc.

```js
respuesta.end("Hola mundo");
respuesta.end(JSON.stringify({ hora: "12:30" }));
```