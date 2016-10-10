var assert = require('chai').assert;

var myApi = require('../../src/ydkjsgrammarandtypes/ch02-mycode');

describe('Various test code', function () {
    it('converts a string and maps', function () {
        assert.equal(typeof myApi.prepender, "function");
        assert.deepEqual(myApi.prepender('fart')([...'bob']),['fartb','farto','fartb']);
    });
});
