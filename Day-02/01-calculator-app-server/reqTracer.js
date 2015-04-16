var startTime = null;
module.exports = {
    start : function(req, res, next){
        console.log('reqTracer - start');
        startTime = new Date();
        next();
    },
    end : function(req, res, next){
        console.log('reqTracer - start');
        var currentTime = new Date();
        var diff = currentTime - startTime;
        console.log(req.url.pathname + ' - ' + diff);
        next();
    }
}
