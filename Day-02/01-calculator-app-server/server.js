var http = require('http'),
    app = require('./app'),
    dataParser = require('./dataParser'),
    bodyParser = require('./bodyParser'),
    serveStatic = require('./serveStatic'),
    reqTracer = require('./reqTracer'),
    staticNotFound = require('./staticNotFound'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction');

//app.use(reqTracer.start);
app.use(dataParser);
app.use(bodyParser);
app.use(serveStatic('./public'));
app.use(staticNotFound('./public'));
app.use(calculatorProcessor);
app.use(notFoundAction);
//app.use(reqTracer.end);

var server = http.createServer(app.run);
server.listen(9090);
console.log('server listening on port 9090..');
