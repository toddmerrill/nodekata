var http = require('http');
var map = require('through2-map')

var port = process.argv[2];

var server = http.createServer((request, response) => {
    if (request.method == 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response)
    }
});

server.on('error', (err) => {
    throw err;
});

server.listen(port);
