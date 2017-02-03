var assert = require('chai').assert;

var createReducer =  require('../../src/myjssamples/create-reducer.js');

describe('creates a reducer', function () {
    it('creates a reducer', function () {
        const x = createReducer();
        assert.isFunction(x);
        // console.log('x:',x);
    });
});
