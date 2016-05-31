var ls = require('./filtered-ls-module');

var directory = process.argv[2];
var ext = process.argv[3];

//console.log('dir: ' + directory + '  ext: ' + ext + '\n\n');

ls(directory, ext, function (err, data) {
    if (err) {
        return console.error(err)
    }
    data.forEach(function (item) {
        console.log(item);
    })
});

