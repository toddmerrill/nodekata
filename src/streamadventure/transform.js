var through = require('through2');

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

process.stdin.pipe(through(write, end)).pipe(process.stdout);