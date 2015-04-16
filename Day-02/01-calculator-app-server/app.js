var middlewares = [];
var app = {
    use : function(middleware){
        middlewares.push(middleware);
    },
    run : function(req, res){
        function process(req, res, middlewares){
            var first = middlewares[0],
                remaining = middlewares.slice(1),
                next = function(){
                    process(req, res, remaining);
                };
            if (first)
                first(req, res, next);
        }
        process(req, res, middlewares);
    }
}
module.exports = app;
