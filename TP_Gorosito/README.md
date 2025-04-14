# 📝 Apunte: Creación de un Servidor en Node.js

## 🌟 Objetivo
Este proyecto creo un servidor simple en Node.js, manejando peticiones HTTP y como interactuar con archivos, manejar rutas y responder a solicitudes HTTP.

---

## 🛠 Herramientas y Métodos Utilizados

### 1. **Node.js**
Node.js es un entorno de ejecución para JavaScript en el lado del servidor. Permite crear servidores web, manejar peticiones HTTP y trabajar con archivos.

### 2. **Módulo `http` de Node.js**
Permite crear un servidor HTTP:

```bash
const http = require('http');
```
### 3. **createServer()**
Crear el servidor y define la funcion que maneja las peticioines:

```bash
const servidor = http.createServer(fnGestor);
```

### 4. **listen()**
Hacen que el servidor escuche en un puerto determinado:

```bash
servidor.listen(3000, fnServidorListo)
```

###5. **Módulo fs (File System)**
Permite leer, escribir, modificar y eliminar archivos del sistema:

```bash
const fs = require('fs')
```

###6. **readFileSync()**
Lee un archivo de forma sincrónica:

```bash
let contenido = fs.readFileSync("nombreDelArchivo.tct","utf8");
```

