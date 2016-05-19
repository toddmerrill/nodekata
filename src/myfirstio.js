var projDir = 'D:/dev/src/firstnode/src/';

var fs = require('fs');
var buf = fs.readFileSync(projDir + 'myFirstIo.js')
var code = buf.toString();
console.log('this file:\n\n' + code + 'lines: ' + code.split('\n').length);

