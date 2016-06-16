var assert = require('chai').assert;

var map =  require('../../src/functionaljavascript/map-with-reduce.js');

describe('map with reduce', function () {
    it('should return an array of doubled values', function () {
        var nums = [1,2,3,4,5]
        var output = map(nums, function double(item) {
            return item * 2
        })
        assert.deepEqual(output,[2, 4, 6, 8, 10],'array values should be doubled')
    });
});

