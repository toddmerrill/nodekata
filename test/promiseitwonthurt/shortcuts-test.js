const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var shortcuts = require('../../src/promiseitwonthurt/shortcuts');

describe('Test shortcuts Promise.resolve, .reject and .catch', function () {
    it('promise returns \'FULFILLED!\'', function () {
        return assert.eventually.equal(shortcuts.fulfillIt.then(), 'FULFILLED!');
    });

    it('promise rejects with Error \'REJECTED!\'', function () {
        return assert.isRejected(shortcuts.rejectIt.then(), 'REJECTED!');
    });

    it('catches Error \'REJECTED!\' from promise', function () {
        return assert.eventually.equal(shortcuts.rejectIt.catch((err => 'CAUGHT_' + err.message)), 'CAUGHT_REJECTED!');
    });
});
