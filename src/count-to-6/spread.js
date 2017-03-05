const spread = input => `The minimum of [${input}] is ${Math.min(...input)}`

// To verify in workshopper, uncomment below
//console.log(spread(process.argv.slice(2)));

module.exports = spread;
