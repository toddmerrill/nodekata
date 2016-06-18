var assert = require('chai').assert;

var repeat =  require('../../src/functionaljavascript/blocking-event-loop.js');

describe('blocking event loop', function () {
    it('repeat non blocking', function () {
        repeat(function() {console.log('repeating')},5);
        //assert.deepEqual(output,[2, 4, 6, 8, 10],'array values should be doubled')
    });
});
