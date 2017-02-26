const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var toRejectOrNot = require('../../src/promiseitwonthurt/to-reject-or-not');

describe('reject a Promise', function () {
    it('promise returns \'I FIRED\'', function () {
        return assert.eventually.equal(toRejectOrNot.then(), 'I FIRED');
    });
});
