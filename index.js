var jsonServer = require('json-server');
var db = require('./db.js');
var fs = require('fs');

var server = jsonServer.create();

/**
 * Los datos son leídos del archivo db.js que están cargados previamente en la aplicación. 
 * Luego son convertidos en una cadena de texto, para posteriormente ser escritos en un archivo 
 * temporal que se genera en los servidores de Vercel. 
 * Es importante aclarar que este archivo es temporal y los datos que se escriban en este, 
 * es momentáneo. Por ejemplo, cuando se ejecute un POST, los datos escritos solo se podrán ver durante 
 * unos minutos
 */
fs.writeFileSync('/tmp/db.json', JSON.stringify(db()));

/**
 * El enrutado de la aplicación se lee desde el archivo temporal. 
 */
var router = jsonServer.router('/tmp/db.json');
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, function() {
  console.log('JSON Server is running on http://localhost:' + port);
});
