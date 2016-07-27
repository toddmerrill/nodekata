var assert = require('chai').assert;

var countWords = require('../../src/functionaljavascript/basic-reduce');

describe('basic reduce', function () {
    it('reduces an array of words to a word count object', function () {
        var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

        assert.deepEqual(countWords(inputWords), {Apple: 2, Banana: 1, Durian: 3});
    });
});
