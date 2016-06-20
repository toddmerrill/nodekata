var assert = require('chai').assert;

var repeat =  require('../../src/functionaljavascript/trampoline.js');

describe('blocking event loop', function () {
    it('repeat non blocking', function () {
        repeat(function() {console.log('repeating')},100000);  //call stack exceeded
    });
});
