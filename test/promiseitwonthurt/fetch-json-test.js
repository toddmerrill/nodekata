const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

var fetchJson = require('../../src/promiseitwonthurt/fetch-json');

describe('fetch JSON using promises', function () {
    it('promise returns parsed JSON', function () {
        return assert.eventually
            .deepEqual(fetchJson('http://echo.jsontest.com/bla1/bla2'), {'bla1': 'bla2'});
    });
});
