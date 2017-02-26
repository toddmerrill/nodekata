const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var fulfillIt = require('../../src/promiseitwonthurt/fulfill-a-promise');

describe('fullfill a Promise', function () {
    it('promise returns \'FULFILLED!\'', function () {
        return assert.eventually.equal(fulfillIt.then(), 'FULFILLED!');
    });
});
