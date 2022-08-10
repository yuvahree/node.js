let http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("welcome");
    res.end("thank you");
}).listen(8080);