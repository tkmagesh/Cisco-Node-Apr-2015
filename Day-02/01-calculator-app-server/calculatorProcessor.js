var calculator = require('./calculator');

module.exports = function(req, res, next){
    if (req.url.pathname === '/calculator'){
        var data = {
            op : req.body.op,
            n1 : parseInt(req.body.n1),
            n2 : parseInt(req.body.n2)
        };
        var result = calculator[data.op](data.n1,data.n2);
        res.write(result.toString());
        res.end();
        next();
    }
}
