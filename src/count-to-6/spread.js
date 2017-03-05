const spread = input => `The minimum of [${input}] is ${Math.min(...input)}`

console.log(spread(process.argv.slice(2)));

module.exports = spread;
