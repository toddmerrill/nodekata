var assert = require('chai').assert;

var doubleAll = require('../../src/functionaljavascript/basic-map');

describe('basic map', function () {
    it('converts a for loop to map', function () {

        var data = [0,7,9,3,0,2];

        assert.deepEqual(doubleAll(data),[0,14,18,6,0,4]);

    });
});
