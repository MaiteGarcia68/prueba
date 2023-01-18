
const http = require('http');

http.createServer( (req, res) => {

    //console.log(req.herders);
    //res.writeHead(200, { 'content-type':'application/csv'});
    //res.write('id, nombre');
    res.write('Hola Mundo...');
    res.end();


})
.listen (8080);

console.log('escuchando el puerto', 8080);


