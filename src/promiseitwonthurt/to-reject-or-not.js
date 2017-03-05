'use strict';

const toRejectOrNot = new Promise(function (resolve, reject) {
    resolve("I FIRED");
    reject(new Error("I DID NOT FIRE"));
})

const onReject = function(error) { console.log(error.message); };

// To verify in workshopper, uncomment below
// toRejectOrNot.then(console.log, onReject);

module.exports = toRejectOrNot;
