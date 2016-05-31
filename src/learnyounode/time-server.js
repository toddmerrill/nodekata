var net = require('net');
var format = require('date-format');

var port = process.argv[2];

var server = net.createServer((socket) => {
    socket.on('end', () => {
        console.log('client disconnected');
    });

    socket.write(format.asString('yyyy-MM-dd hh:mm', new Date()) + '\r\n');
    socket.end();
});

server.on('error', (err) => {
    throw err;
});

server.listen(port);
