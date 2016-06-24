var assert = require('chai').assert;

var getDependencies =  require('../../src/functionaljavascript/recursion');

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
            "version": "1.2.6",
            "dependencies": {
                "wordwrap": {
                    "version": "0.0.2"
                }
            }

        }
    }
}

var nodeps = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    dependencies:{}
}

describe('parse dependencies', function () {
    it('returns sorted deps list without dupes', function () {
        var dependencies = getDependencies(loremIpsum);
        assert.equal(dependencies.length,3);
        assert.equal(dependencies[0],'inflection@1.2.6')
        assert.equal(dependencies[1],'optimist@0.3.7')
        assert.equal(dependencies[2],'wordwrap@0.0.2')
    });

    it('returns empty list if no deps', function () {
        var dependencies = getDependencies(nodeps);
        assert.equal(dependencies.length,0);
    });
});
