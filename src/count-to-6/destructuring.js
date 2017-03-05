const destructuring = input => {
    const conf = {};
    [, conf.username, conf.email] = input;
    return conf;
}

console.log(destructuring(process.argv.slice(2)));

module.exports = destructuring;
