var assert = require('chai').assert;

var callAndApply = require('../../src/curry/call-and-apply');

describe('test call and apply', function () {
    it('performs a call or apply on a given 3 parameter function', function () {
        var update = function (name, age, tShirtSize) {
            this.name = name;
            this.age = age;
            this.tShirtSize = tShirtSize;
        };

        var person = {
            name: 'Kishor',
            age: 28,
            tShirtSize: 'L'
        };

        callAndApply.caller(person, update, 'Sharma', 29, 'XL')
        assert.equal(person.name, 'Sharma');
        assert.equal(person.age, 29);
        assert.equal(person.tShirtSize, 'XL');

        callAndApply.applier(person, update, ['Bob', 88, 'S'])
        assert.equal(person.name, 'Bob');
        assert.equal(person.age, 88);
        assert.equal(person.tShirtSize, 'S');

    });
});
