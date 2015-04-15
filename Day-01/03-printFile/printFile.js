var fs = require("fs");
//var fileContents = fs.readFileSync("data.txt", {encoding : "utf8"});
/*fs.readFile("data.txt", {encoding: "utf8"}, function(err,data){
    console.log("data length = " + data.length);
    console.log("done");
});*/

var stream = fs.createReadStream("data.txt", {encoding : "utf8"});
var dataSize = 0;
var readCycleCount = 0;
stream.on("data", function(chunk){
    dataSize += chunk.length;
    ++readCycleCount;
});
stream.on("end", function(){
    console.log("data length = " + dataSize);
    console.log("readCycleCount = ", readCycleCount);
});
//console.log(fileContents);
