'use strict';

var promise = new Promise(function (fulfill, reject) {
    return fulfill ? "FULFILLED!" : "REJECTED!";
});

// Your solution here