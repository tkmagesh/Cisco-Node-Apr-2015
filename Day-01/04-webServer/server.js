var http = require('http');
var server = http.createServer(function(req, res){
    res.write('A new connection is estalished for '+ req.url);
    res.end();
});
server.listen(9090);
console.log('server listening on port 9090');
