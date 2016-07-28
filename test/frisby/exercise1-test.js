var assert = require('chai').assert;

var words =  require('../../src/frisby/excercise1');

describe('partial application impl', function () {
    it('parse the words of a sentence - apply the argument before', function () {
        assert.deepEqual(words('the rain in spain')(), ['the','rain','in','spain']);

    });
});
