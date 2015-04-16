var qs = require('querystring');

module.exports = function(req, res, next){
    console.log(req.method);
    if (req.method === "POST"){
        var reqBody = '';
        req.on('data', function(chunk){
            reqBody += chunk;
        });
        req.on('end', function(){
            console.log('reqBody = ', reqBody);
            req.body = qs.parse(reqBody);
            console.log(req.body);
            next();
        })
    } else {
        next();
    }
}
