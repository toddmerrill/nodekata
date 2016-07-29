var through = require('through2');
var split = require('split');

var lineNum = 0;
function write(buffer, _, next) {
    lineNum++;
    var bufString = buffer.toString();
    var modified = lineNum % 2 ? bufString.toLowerCase() : bufString.toUpperCase();
    this.push(modified+"\n");
    next();
}

process.stdin
    .pipe(split())
    .pipe(through(write))
    .pipe(process.stdout);