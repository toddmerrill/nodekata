var assert = require('chai').assert;

var getShortMessages = require('../../src/functionaljavascript/basic-filter');

describe('basic filter', function () {
    it('converts a for loop to map', function () {
        var input =
            [ {message: 'Tempor quis esse consequat sunt ea eiusmod.'},
              {message: 'Id culpa ad proident ad xxxxxxxxxxxxx nulla laborum incididunt.'},
              {message: 'Id culpa ad proident ad yyyyyyyyyyyyy nulla laborum incididunt.'},
              {message: 'Id culpa ad proident ad nulla laborum incididunt.'},
              {message: 'Id culpa ad proident ad nufffffddddd               dflla laborum incididunt.'},
              {message: 'Id culpa ad proident ad ddddddddddddddd nulla laborum incididunt.'},
              {message: 'Id culpa ssssssssssssssssssssssssssssss ad proident ad nulla laborum incididunt.'},
              {message: 'Ullamco in ea et ad anim anim ullamco jjjjjjjjjjjjjjjjjjjjjjjjest.'},
              {message: 'Ullamco in ea et ad dddddddddddddanim anim ullamco est.'},
              {message: 'Ullamco in ea et ad anim anidfdfdfdffffddm ullamco est.'},
              {message: 'Ullamco in ea et eeeeeeeeeeeeewwwwwwwwwwwad anim anim ullamco est.'},
              {message: 'Ullamco in ea evvvvvvvvvvvvvvvvvvvvvvvvvvt ad anim anim ullamco est.'},
              {message: 'Ullamco in ea et ad anim anim ullamco est.'},
              {message: 'Est ut irure irure nisi.'} ]

        var result =
            [ 'Tempor quis esse consequat sunt ea eiusmod.',
              'Id culpa ad proident ad nulla laborum incididunt.',
              'Ullamco in ea et ad anim anim ullamco est.',
              'Est ut irure irure nisi.' ]

        assert.deepEqual(getShortMessages(input), result);

    });
});
