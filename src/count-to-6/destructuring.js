const destructuring = input => {
    const conf = {};
    [, conf.username, conf.email] = input;
    return conf;
}

// To verify in workshopper, uncomment below
// console.log(destructuring(process.argv.slice(2)));

module.exports = destructuring;
