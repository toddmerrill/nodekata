var assert = require('chai').assert;

var repeat =  require('../../src/functionaljavascript/trampoline.js');

describe('trampoline call', function () {
    it('tries to blow the stack', function () {
        repeat(function() {/*console.log('repeating')*/},100000);  //call stack exceeded w/o trampoline
    });
});
