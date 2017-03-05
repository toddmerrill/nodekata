'use strict';

const promise = new Promise(function (resolve, reject) {
    resolve("PROMISE VALUE");
})

// To verify in workshopper, uncomment below
// promise.then(console.log);
// console.log('MAIN PROGRAM');

module.exports = promise;
