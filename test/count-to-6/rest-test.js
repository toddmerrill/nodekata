var assert = require('chai').assert;

var average = require('../../src/count-to-6/rest');

describe('ES6 rest parameters', () => {
    it('averages a list of numbers', () => {
        assert.equal(average(8,16,5,4), 8.25);
    });
});
