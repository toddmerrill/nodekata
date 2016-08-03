var assert = require('chai').assert;

var checkUsersValid = require('../../src/functionaljavascript/basic-every-some');

describe('basic every some', function () {
    it('do all the elements in the array exist in the given array', function () {
        var goodUsers = [
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ];

        var testAllValid = checkUsersValid(goodUsers);

        assert.equal(testAllValid([{ id: 2 },{ id: 1 }]), true);
        assert.equal(testAllValid([{ id: 2 },{ id: 4},{ id: 1}]), false);
    });
});
