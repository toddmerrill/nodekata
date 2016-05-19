var projDir = 'D:/dev/src/firstnode/src/';
var fileName = 'my-first-async-io.js';
var fs = require('fs');

var callback = function (err, code) {
    if (err) {
        console.log(err);
    } else {
        console.log('this file:\n\n' + code + '\nlines: ' + code.split('\n').length);
    }
}

fs.readFile(projDir + fileName, 'utf-8', callback);
