var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var fileName = process.argv[3];

var server = http.createServer((request, response) => {
    var readStream = fs.createReadStream(fileName);
    readStream.on('open', function () {
        readStream.pipe(response);
    });
});

server.on('error', (err) => {
    throw err;
});

server.listen(port);
