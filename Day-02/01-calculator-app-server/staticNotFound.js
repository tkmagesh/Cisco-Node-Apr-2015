var path = require('path'),
    fs = require('fs');

var statisResourceExtns = ['.html','.css','.js','.txt','.jpg','.png','.json','.ico'];
var defaultStaticFolder = './static';

function isStatic(resource){
    var resourceExtn = path.extname(resource);
    return statisResourceExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(staticFolder){
    if (staticFolder) defaultStaticFolder = staticFolder;
    return function(req, res, next){
        if (isStatic(req.url.pathname)){
            var resourcePath = path.join(__dirname, defaultStaticFolder, req.url.pathname);
            if (!fs.existsSync(resourcePath)){
                res.statusCode = 404;
                res.end();
            }
            next();
            return;
        }
        next();
    }
}
