var assert = require('chai').assert;

var slice = require('../../src/functionaljavascript/function-call');

describe('call slice without call or apply', function () {
    it('slices an array of numbers', function () {
        var nums = [1,2,3,4,5]

        // your slice function should match the regular
        // behaviour of slice, except it takes the array
        // as the first argument
        assert.deepEqual(slice(nums, 0, 2), [1,2]);
        assert.deepEqual(slice(nums, 1, 2), [2]);
        assert.deepEqual(slice(nums), nums);
        assert.deepEqual(slice(nums, 0, 6), nums);

    });
});
