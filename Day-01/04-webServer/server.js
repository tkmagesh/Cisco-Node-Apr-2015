var http = require('http'),
    path = require('path'),
    fs = require('fs');

var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);
    res.write("write starts at " + new Date().toString());
    fs.readFile(resourcePath, {encoding : 'utf8'}, function(err, data){
        if (!err){
            res.write(data);
            fs.write("write ends at " + new Date().toString());
            res.end();
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});
server.listen(9090);
console.log('server listening on port 9090');
