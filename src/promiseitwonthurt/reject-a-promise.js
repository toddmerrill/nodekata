'use strict';

const rejectIt = new Promise(function (resolve, reject) {
    setTimeout(() => {reject(new Error("REJECTED!"))},300);
})

const onReject = function(error) { console.log(error.message); };
rejectIt.then(null, onReject);

module.exports = rejectIt;
