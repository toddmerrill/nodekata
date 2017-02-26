const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var rejectIt = require('../../src/promiseitwonthurt/reject-a-promise');

describe('reject a Promise', function () {
    it('promise is rejected with message \'REJECTED!\'', function () {
        return assert.isRejected(rejectIt.then(), 'REJECTED!');
    });
});
