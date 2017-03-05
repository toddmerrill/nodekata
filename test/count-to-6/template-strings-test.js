var assert = require('chai').assert;

var templateStrings = require('../../src/count-to-6/template-strings');

describe('ES6 template strings', () => {
    it('returns a templated string', () => {
        assert.equal(templateStrings('Bobby Joe'),
                "Hello, Bobby Joe!\nYour name lowercased is \"bobby joe\".");

    });
});
