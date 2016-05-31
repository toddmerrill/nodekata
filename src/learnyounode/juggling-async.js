var http = require('http');

var URL_COUNT = 3;
var urls = [];
urls[0] = process.argv[2];
urls[1] = process.argv[3];
urls[2] = process.argv[4];

/*
urls[0] = 'http://toddmerrill.com/kavita/index.html'
urls[1] = 'http://toddmerrill.com/Books.html'
urls[2] = 'http://toddmerrill.com/tmp.html'
*/

getUrlData = function(index, code) {
    http.get(urls[index], function (response) {
        response.setEncoding('utf-8');
        var text = '';
        response.on("data", function (data) { text += data; });
        response.on("end", function () { code(index, text); });
    });
}

function printResults(result) {
    for (var resultIndex in result) {
        console.log(result[resultIndex]);
    }
}
juggleAsync = function(urls) {
    var result = [];
    var resultCount = 0;
    for (var index in urls) {
        getUrlData(index, function(index, data) {
            result[index] = data;
            resultCount ++;
            if (resultCount == URL_COUNT) { printResults(result); }
        });
    }
};

juggleAsync(urls);
