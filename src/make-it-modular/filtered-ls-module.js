module.exports = function(directory,ext,callback) {
    var fs = require('fs');

    fs.readdir(directory, function (err, data) {
        var result = [];
        for (var value of data) {
            if (value.endsWith(ext)) {
                result.push(value);
            }
        }
        callback(null, result);
    })
}