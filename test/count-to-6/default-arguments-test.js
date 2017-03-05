var assert = require('chai').assert;

var defaultArguments = require('../../src/count-to-6/default-arguments');

describe('ES6 default arguments', () => {
    it('calculates the midpoint with values and defaults', () => {
        assert.equal(defaultArguments(-1), 0);
        assert.equal(defaultArguments(1,10), 5.5);
        assert.equal(defaultArguments(-1, undefined), 0);
        assert.equal(defaultArguments(undefined,undefined), 0.5);
    });
});
