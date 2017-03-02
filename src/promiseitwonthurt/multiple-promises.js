'use strict';

const all = (promise1, promise2) => {
    let counter = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        promise1.then((arg) => {
            result[0] = arg;
            counter++;
            if (counter == 2) {
                resolve(result)
            }
        });

        promise2.then((arg) => {
            result[1] = arg;
            counter++;
            if (counter == 2) {
                resolve(result)
            }
        });
    });
}

// to verify uncomment below
// all(getPromise1(), getPromise2()).then().then(console.log);

module.exports = all;
