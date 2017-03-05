var assert = require('chai').assert;

var arrowFunctions = require('../../src/count-to-6/arrow-functions');

describe('ES6 arrow functions', () => {
    it('glues the first letter of each string together', () => {
        assert.equal(arrowFunctions(["Hello", "arrow", "functions"]),
                        `[Hello,arrow,functions] becomes "Haf"`);
    });
});
