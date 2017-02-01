var assert = require('chai').assert;

var createReducer =  require('../../src/myjssamples/create-reducer.js');

describe('creates a reducer', function () {
    it('creates a reducer', function () {
        const x = createReducer();
        console.log('x:',x);
        // assert.deepEqual([-15,-2,5,8,65,72,177,400], merge([-15,8,65,177],[-2,5,72,400]));
    });
});
