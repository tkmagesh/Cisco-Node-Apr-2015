var http = require('http'),
    path = require('path'),
    fs = require('fs');

var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);
    if (!fs.existsSync(resourcePath)){
        res.statusCode = 404;
        res.end();
        return;
    }
    var stream = fs.createReadStream(resourcePath, {encoding : 'utf8'});
   /* stream.on('data', function(chunk){
        res.write(chunk);
    });
    stream.on('end', function(){
        res.end();
    });*/
    stream.pipe(res);

});
server.listen(9090);
console.log('server listening on port 9090');


