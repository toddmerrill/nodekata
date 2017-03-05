var assert = require('chai').assert;

var spread = require('../../src/count-to-6/spread');

describe('ES6 spread operator', () => {
    it('maps array of ints to Math.min()', () => {
        assert.deepEqual(spread([18,5,7,24]),'The minimum of [18,5,7,24] is 5');
    });
});
