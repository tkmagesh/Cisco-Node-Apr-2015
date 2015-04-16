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
        var resourcePath = path.join(__dirname, defaultStaticFolder, req.url.pathname);
        if (isStatic(req.url.pathname) && fs.existsSync(resourcePath)){
            var stream = fs.createReadStream(resourcePath, {encoding : 'utf8'})
            stream.pipe(res);
            stream.on('end', function(){
                next();
            });
        } else {
            next();
        }
    }
};
