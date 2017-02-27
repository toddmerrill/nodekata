'use strict';

const attachTitle = (arg) => 'DR. ' + arg;
const promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log);

module.exports = {
    attachTitle,
    promise
}
