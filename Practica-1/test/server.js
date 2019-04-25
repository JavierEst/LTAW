var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")
console.log("")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
    var mime = "text/html"
    res.writeHead(200, {'Content-Type': mime});
    res.write(data);

    if (req.url != "/favicon.ico"){
      console.log("---> Peticion recibida")
      console.log("Recurso solicitado (URL): " + req.url)
      var q = url.parse(req.url, true);
      console.log("URL parseada: ")
      console.log("pathname:" + q.pathname)
      console.log("Search: " + q.search)
      console.log("")
    }
    //-- Ahora terminamos la respuesta, invocando el métido end
    res.end();
  });
  //_- Crear el mensaje de respuesta. Primero la cabecera
  //-- El código 200 se usa para indicar que todo está ok
  //-- En el campo Content-Type tenemos que introducir el tipo MIME
  //-- de lo que devolvemos

  //res.write(msg);



}).listen(8080);
