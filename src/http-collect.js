var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf-8');
    var count = 0;
    var text = '';
    response.on("data", function (data) {
        count += data.length;
        text += data;
    });
    response.on("end", function () {
        console.log(count);
        console.log(text);
    });
});
