var fs = require('fs');

var directory = process.argv[2];
var ext = process.argv[3];

console.log('dir: ' + directory + '  ext: ' + ext);
fs.readdir(directory, function (err, data) {
    data.forEach(function(item) {
        if (item.endsWith(ext)) {
            console.log(item)
        }
    });
});