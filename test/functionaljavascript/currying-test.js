var assert = require('chai').assert;

var curryN = require('../../src/functionaljavascript/currying');

describe('curry N params', function () {
    it('adds three numbers', function () {
        function add3(one, two, three) {
            return one + two + three
        }

        var curryC = curryN(add3)
        var curryB = curryC(1)
        var curryA = curryB(2)
        assert.equal(curryA(3), 6);
        assert.equal(curryA(10), 13);
        assert.equal(curryN(add3)(1)(2)(3), 6);
    });
});
