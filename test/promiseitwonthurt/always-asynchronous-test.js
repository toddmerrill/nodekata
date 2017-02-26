const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var promise = require('../../src/promiseitwonthurt/always-asynchronous');

describe('promises are always asynchronous', function () {
    it('promise returns \'PROMISE VALUE\'', function () {
        return assert.eventually.equal(promise.then(), 'PROMISE VALUE');
    });
});
