var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")

http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month + " " + q.day + " " + q.hour;
    res.write(data);
    res.end(txt);
  });
}).listen(8080);
