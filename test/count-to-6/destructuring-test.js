var assert = require('chai').assert;

var destructuring = require('../../src/count-to-6/destructuring');

// format: [userId, username, email, age, firstName, lastName]
describe('ES6 destructuring ', () => {
    it('maps the 2nd and 3rd array item to username and email obj props', () => {
        assert.deepEqual(destructuring(['bla','userDude','bla@blee.com',33,'g','t']),
                                {username: "userDude", email: "bla@blee.com"});
    });
});
