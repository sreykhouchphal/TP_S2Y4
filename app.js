var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + './index.html').pipe(res);
    }else if(req.url === '/assets/book.png'){
        res.writeHead(200,{'Content-Type': 'image/png'});
        fs.createReadStream(__dirname + '/assets/book.png').pipe(res);
    }else if (req.url === './detail.html'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + './detail.html').pipe(res);
    }
});
server.listen(3000, '127.0.0.1');
console.log('Now, listening to port 3000 http://localhost:3000/');


