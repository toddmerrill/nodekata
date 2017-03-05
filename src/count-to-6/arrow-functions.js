const arrowFunctions = (input) => {
    const transformed = input.map(str => str[0]).reduce((out, ch) => out+ch, '');
    return `[${input}] becomes "${transformed}"`
}

console.log(arrowFunctions(process.argv.slice(2)));

module.exports = arrowFunctions;
