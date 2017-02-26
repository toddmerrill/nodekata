'use strict';

const fulfillIt = new Promise(function (resolve, reject) {
    setTimeout(() => {resolve("FULFILLED!")},300);
})

fulfillIt.then(console.log)

module.exports = fulfillIt;
