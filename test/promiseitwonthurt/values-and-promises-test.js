const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var vap = require('../../src/promiseitwonthurt/values-and-promises');

describe('promises wrap values', function () {
    it('promise returns \'DR. MANHATTAN\'', function () {
        return assert.eventually.equal(vap.promise.then(vap.attachTitle), 'DR. MANHATTAN');
    });
});
