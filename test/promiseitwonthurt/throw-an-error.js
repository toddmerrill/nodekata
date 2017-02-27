const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const throwIt = require('../../src/promiseitwonthurt/throw-an-error');

describe('catches an error', function () {
    it('catches a parsing error', function () {
        return assert.isRejected(
            throwIt("{lsdfs::jfslx; {0=s};{{}").then());
    });
});
