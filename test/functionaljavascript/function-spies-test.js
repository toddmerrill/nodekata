var assert = require('chai').assert;

var Spy = require('../../src/functionaljavascript/function-spies.js');

describe('function spies', function () {
    it('should return the number of calls for the "spied on" method', function () {
        var spy = Spy(console, 'error')
        console.error('calling console.error')
        console.error('calling console.error')
        console.error('calling console.error')
        assert.equal(spy.count, 3, 'should have recorded 3 calls')
    });
});
