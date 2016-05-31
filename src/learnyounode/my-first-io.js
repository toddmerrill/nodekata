var file = process.argv[2];

var fs = require('fs');
var buf = fs.readFileSync(file);
var code = buf.toString();
//console.log('this file:\n\n' + code + 'lines: ' + code.split('\n').length);
console.log(code.split('\n').length - 1);