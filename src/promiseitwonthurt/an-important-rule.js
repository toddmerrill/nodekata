'use strict';

// NOTE:  This workshopper is broken for all versions of Node
//        6.0 or greater.  To get it to pass, you need to use
//        nvm to set your node version to 5.12.0

const alwaysThrows = () => {throw new Error('OH NOES')};
const iterate = (arg) => {console.log(arg); return arg++};
Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);
