var http = require('http');

var server = http.createServer((req, res) => {
    res.end('<html><body><h1>Lista de Produtos</h1></body></html>');
});
server.listen(1337);

console.log('It\'s fine');