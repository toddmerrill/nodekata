var assert = require('chai').assert;

var defaultArguments2 = require('../../src/count-to-6/default-arguments2');

describe('ES6 default arguments as expressions', () => {
    it('appends the configured or default number of ex. points to string', () => {
        assert.equal(defaultArguments2("Hi",5), "Hi!!!!!");
        assert.equal(defaultArguments2("Hi"), "Hi!!");
        assert.equal(defaultArguments2("Hello?", undefined), "Hello?!!!!!!");
    });
});
