const assert = require('chai').assert;

const makeTree = require('../../src/funfunfunction/recursion');

const categories = Object.freeze(
        [
            { id: "animals", "parent": null },
            { id: "mammals", "parent": "animals" },
            { id: "cats", "parent": "mammals" },
            { id: "dogs", "parent": "mammals" },
            { id: "chihuahua", "parent": "dogs" },
            { id: "labrador", "parent": "dogs" },
            { id: "persian", "parent": "cats" },
            { id: "siamese", "parent": "cats" }
        ]
);

const categoryTree = Object.freeze(
        {
            animals: {
                mammals: {
                    dogs: {
                        chihuahua: null,
                        labrador: null
                    },
                    cats: {
                        persian: null,
                        siamese: null
                    }
                }
            }
        }
);

describe('use recursion to deal with tree data', function () {
    it('creates a JSON tree structure', function () {
        assert.deepEqual(makeTree(categories, null), categoryTree)

    });
});
