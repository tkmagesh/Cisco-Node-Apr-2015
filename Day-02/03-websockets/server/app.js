var nodejsWebSocket = require('nodejs-websocket');
var server = nodejsWebSocket.createServer(function(connection){
    console.log("a new connection is established");
    var timer = null;
    connection.on("text", function(msg){
        if (msg === "start"){
            timer = setInterval(function(){
                connection.sendText(new Date().toString());
            },3000)
        } else if (msg === "stop"){
            clearInterval(timer);
        } else {
            console.log("unknown message from client");
        }
    });
});
server.listen(9090);
console.log("socket server listening on port 9090");
