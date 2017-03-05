var assert = require('chai').assert;

var tagged = require('../../src/count-to-6/tagged-template-strings');

describe('ES6 tagged template strings', () => {
    it('escapes the HTML-unsafe characters', () => {
        const name = "domenic"
        const comment = "<dl> is a fun tag"
        assert.equal(tagged`<b>${name} says</b>: "${comment}"`, "<b>domenic says</b>: \"&lt;dl&gt; is a fun tag\"");
    });
});
