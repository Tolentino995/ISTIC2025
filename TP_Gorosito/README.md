# 📝 Apunte: Creación de un Servidor en Node.js

## 🌟 Objetivo
Este proyecto creo un servidor simple en Node.js, manejando peticiones HTTP y como interactuar con archivos, manejar rutas y responder a solicitudes HTTP.

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

