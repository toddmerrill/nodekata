events = require('events');
emitter = new events.EventEmitter();

function doIt() {
    console.log('I did it!');
}

emitter.on('doit', doIt);

emitter.emit('doit');