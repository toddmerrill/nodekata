var http = require('http');
var url = require('url')
var querystring = require('querystring')

var port = process.argv[2];
//var port = 99;

var server = http.createServer((request, response) => {
    var result = {};
    if (request.method == 'GET') {
        var parsedUrl = url.parse(request.url, true);
        var iso = parsedUrl.query['iso'];
        var date = new Date(iso);
        if (parsedUrl.pathname == '/api/parsetime') {
            console.log('date:' + date.getTime());
            result.hour = date.getHours();
            result.minute = date.getMinutes();
            result.second = date.getSeconds();
        }
        if (parsedUrl.pathname == '/api/unixtime') {
            console.log('date:' + date.getTime());
            result.unixtime = date.getTime();
        }
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(result));
});

server.on('error', (err) => {
    throw err;
});

server.listen(port);
