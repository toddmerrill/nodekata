var assert = require('chai').assert;

var reduce = require('../../src/functionaljavascript/basic-recursion');

describe('basic recursion', function () {
    it('reduces an array with a function', function () {

        var reducer = function(prev, curr, index, arr) {
            return prev + curr;
        };

        assert.equal(reduce([1,2,3], reducer, 0),6)

    });
});
