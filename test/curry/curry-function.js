var assert = require('chai').assert;

var curryFunc =  require('../../src/curry/curry-function');

describe('function currier', function () {
    it('', function () {

        function abc(a,b,c){
            return a + b + c;
        }

        var curriedAbc = curryFunc(abc);
        assert.equal(curriedAbc(6,7,8), 21);
        assert.equal(curriedAbc(3)(4)(5), 12);
        assert.equal(curriedAbc(4)(5,6), 15);
        assert.equal(curriedAbc(5,6)(7), 18);

    });
});
