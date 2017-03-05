'use strict';

const fulfillIt = new Promise(function (resolve, reject) {
    setTimeout(() => {resolve("FULFILLED!")},300);
})

// To verify in workshopper, uncomment below
// fulfillIt.then(console.log)

module.exports = fulfillIt;
