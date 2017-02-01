var assert = require('chai').assert;

var merge =  require('../../src/myjssamples/sorted-list-merge.js');

describe('sorted list merge', function () {
    it('merges the 2 sorted lists', function () {
        assert.deepEqual([-15,-2,5,8,65,72,177,400], merge([-15,8,65,177],[-2,5,72,400]));
    });
});
