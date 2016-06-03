var http = require('http');
var url = require('url')

var port = process.argv[2];

var server = http.createServer((request, response) => {
    var result = {};
    if (request.method == 'GET') {
        var parsedUrl = url.parse(request.url, true);
        var iso = parsedUrl.query['iso'];
        var date = new Date(iso);
        if (parsedUrl.pathname == '/api/parsetime') {
            result = parseTime(date)
        }
        if (parsedUrl.pathname == '/api/unixtime') {
            result = unixTime(date);
        }
    }
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(result));
});

function parseTime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

function unixTime(date) {
    return { unixtime: date.getTime() };l
}

server.on('error', (err) => {
    throw err;
});

server.listen(port);
