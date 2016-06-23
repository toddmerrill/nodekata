var assert = require('chai').assert;

var getDependencies =  require('../../src/functionaljavascript/recursion.js');

var loremIpsum = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
        "optimist": {
            "version": "0.3.7",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }
        },
        "inflection": {
            "version": "1.2.6"
        }
    }
}

describe('parse dependencies', function () {
    it('parses dependencies', function () {
        var dependencies = getDependencies(loremIpsum);
        assert.equal(4, dependencies.length);
    });
});
