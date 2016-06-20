var assert = require('chai').assert;

var repeat =  require('../../src/functionaljavascript/blocking-event-loop.js');

describe('blocking event loop', function () {
    it('repeat non blocking', function () {
        repeat(function() {console.log('repeating')},5);
    });
});
