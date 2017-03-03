var assert = require('chai').assert;

var templateStrings = require('../../src/count-to-6/template-strings');

describe('test template strings', function () {
    it('dfsdfsdf', function () {
        assert.equal(templateStrings('Bobby Joe'),
                "Hello, Bobby Joe!\nYour name lowercased is \"bobby joe\".");

    });
});
