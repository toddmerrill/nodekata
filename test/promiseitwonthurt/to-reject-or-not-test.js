const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var toRejectOrNot = require('../../src/promiseitwonthurt/to-reject-or-not');

describe('Both resolve and reject can\'t be called', function () {
    it('promise returns \'I FIRED\'', function () {
        return assert.eventually.equal(toRejectOrNot.then(), 'I FIRED');
    });
});
