var assert = require('chai').assert;

var sum =  require('../../src/myjssamples/recursive-sum.js');

describe('recursive sum function', function () {
    it('sums the list of numbers', function () {
        assert.equal(50, sum([32,-5, 2.9, 18, 2.1]));
    });
});
