var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    url = require('url'),
    calculator = require('./calculator');

var statisResourceExtns = ['.html','.css','.js','.txt','.jpg','.png','.json','.ico'];

function isStatic(resource){
    var resourceExtn = path.extname(resource);
    return statisResourceExtns.indexOf(resourceExtn) !== -1;
}

var server = http.createServer(function(req, res){
    var urlData = url.parse(req.url, true);
    if (isStatic(urlData.pathname)){
        var resourcePath = path.join(__dirname, urlData.pathname);
        if (!fs.existsSync(resourcePath)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath, {encoding : 'utf8'}).pipe(res);
    } else if (urlData.pathname === '/calculator'){
        var data = {
            op : urlData.query.op,
            n1 : parseInt(urlData.query.n1),
            n2 : parseInt(urlData.query.n2)
        };
        var result = calculator[data.op](data.n1,data.n2);
        res.write(result.toString());
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
console.log('server listening on port 9090..');


