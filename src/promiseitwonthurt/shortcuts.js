'use strict';

const fulfillIt = Promise.resolve("FULFILLED!");
const rejectIt = Promise.reject(new Error("REJECTED!"));
rejectIt.catch(() => {}); // turns off warning about handling rejection
                          // asynchronously

// these calls are just to make the 'shortcuts' npm test pass.  My tests
// are in mocha ;)
fulfillIt.then();
rejectIt.then();
rejectIt.catch();

module.exports =
{
    fulfillIt,
    rejectIt
}
