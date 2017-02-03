var assert = require('chai').assert;

var curryN = require('../../src/functionaljavascript/currying');

describe('curry N params', function () {
    it('adds three numbers', function () {
        console.log('')
        assert.equal(curryN(function(){return 5;}), 5);
        assert.equal(curryN(function(one){return one;})(7), 7);

        function add3(one, two, three) {
            return one + two + three
        }
        var curryC = curryN(add3);
        var curryB = curryC(1);
        var curryA = curryB(2);
        assert.equal(curryA(3), 6);
        assert.equal(curryA(10), 13);
        assert.equal(curryN(add3)(1)(2)(3), 6);
        assert.equal(curryN(add3)(1,2)(3), 6);

    });
});
