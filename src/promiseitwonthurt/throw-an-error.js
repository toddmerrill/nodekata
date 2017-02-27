'use strict';

// NOTE:  This workshopper is broken for all versions of Node
//        6.0 or greater.  To get it to pass, you need to use
//        nvm to set your node version to 5.12.0
const parsedPromise = (json) => {
    try {
        return Promise.resolve(JSON.parse(json));
    } catch (error) {
        return Promise.reject(error);
    }
}

parsedPromise(process.argv[2]).catch(console.log);

module.exports = parsedPromise;
