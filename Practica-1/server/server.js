var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  if (req.url != "/favicon.ico"){
    console.log("---> Peticion recibida")
    console.log("Recurso solicitado (URL): " + req.url)
    var q = url.parse(req.url, true);
    console.log("URL parseada: ")
    console.log("Host: " + q.host)
    console.log("pathname:" + q.pathname)
  }

  //_- Crear el mensaje de respuesta. Primero la cabecera
  //-- El código 200 se usa para indicar que todo está ok
  //-- En el campo Content-Type tenemos que introducir el tipo MIME
  //-- de lo que devolvemos
  var mime = "text/html"
  res.writeHead(200, {'Content-Type': mime});

  //-- Ahora escribimos el cuerpo: los datos a enviar, en html
  //-- En este ejemplo se envia directamente el HTML
  var msg = `
  <!DOCTYPE html>
  <html lang="es" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Mi tienda</title>
      <link rel="stylesheet" href="/css/micss.css">
    </head>
    <body>
      <img src="logo_node.png" alt="logo de node.js">
      <p>Esto es una prueba....</p>
      <a href="test1.html">Artículo 1</a>
    </body>
  </html>
  `
  //-- Meter el mensaje en la respuesta
  res.write(msg);

  //-- Ahora terminamos la respuesta, invocando el métido end
  res.end();

}).listen(8080);
