module.exports = function(directory,ext,callback) {
    var fs = require('fs');

    fs.readdir(directory, function (err, data) {
        var result = [];
        for (key in data) {
            if (data[key].endsWith(ext)) {
                result.push(data[key]);
            }
        }
        callback(null, result);
    })
}