var assert = require('chai').assert;

var loadUsers =  require('../../src/functionaljavascript/async-loops.js');

var loader = function (id, callback) {
    console.log('id:' + id);
    return 'bla:'+id;
};

describe('load users', function () {
    it('loads users in the right order', function () {
        var bigArray = Array.from(Array(10000).keys())
        loadUsers(bigArray, loader,
        function(users){console.log('done:'+users.length)});
    });
});
