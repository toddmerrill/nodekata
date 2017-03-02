const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var all = require('../../src/promiseitwonthurt/multiple-promises');

describe('implement simple \all\' functionality', function () {
    it('promise returns array of results from 2 promises', function () {
        return assert.eventually
            .deepEqual(all(Promise.resolve('x88'), Promise.resolve(32)), ['x88', 32]);
    });
});
