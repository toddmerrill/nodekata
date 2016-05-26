var fs = require('fs');

var callback = function (err, code) {
    if (err) {
        return console.log(err);
    }
    console.log(code.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf-8', callback);
