var fs = require('fs');

var directory = process.argv[2]
var ext = process.argv[3]

console.log('dir: ' + directory + '  ext: ' + ext);
fs.readdir(directory, function (err, data) {
    for (key in data) {
        if (data[key].endsWith(ext)) {
            console.log(data[key])
        }
    }
})