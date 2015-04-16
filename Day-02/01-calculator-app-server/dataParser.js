module.exports = function(req, res, next){
    req.url = require('url').parse(req.url, true);
    next();
}
