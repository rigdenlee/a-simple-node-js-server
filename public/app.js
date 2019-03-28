var http = require('http');

/* var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('you dwags, now m listening to port 3000');*/

//readable streams

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received: ');
//     console.log(chunk);
// });


//writablestream
 var fs = require('fs');

 var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
 var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//  myReadStream.on('data', function(chunk){
//      console.log('new chunk received');
//      myWriteStream.write(chunk);
//  });

//pipes
var http = require('http');

myReadStream.pipe(myWriteStream);

 var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('you dwags, now m listening to port 3000');
