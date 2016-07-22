var assert = require('chai').assert;

var longDelay =  require('../../src/curry/long-delay-invocation');

describe('long delayed invocation', function () {
    it('accepts a single number per invocation, returning the sum when no argument is given', function () {
        // console.log('obj:'+longDelay(3))
        assert.equal(longDelay(3)(4)(5)(), 12);

    });
});
