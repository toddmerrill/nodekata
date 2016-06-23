var assert = require('chai').assert;

var loadUsers =  require('../../src/functionaljavascript/async-loops.js');

var loader = function (id) {
    return 'bla:'+id;
};

describe('load users', function () {
    it('loads users in the right order', function () {
        var bigArray = Array.from(Array(10000).keys())
        var users = loadUsers(bigArray, loader,
        function(users){console.log('done:'+users.length);
                        return users;});
        assert.equal(10000, users.length)
        assert.equal('bla:5000', users[5000]);
    });
});
