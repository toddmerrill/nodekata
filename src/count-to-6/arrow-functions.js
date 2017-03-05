const arrowFunctions = (input) => {
    const transformed = input.map(str => str[0]).reduce((out, ch) => out+ch, '');
    return `[${input}] becomes "${transformed}"`
}

// To verify in workshopper, uncomment below
// console.log(arrowFunctions(process.argv.slice(2)));

module.exports = arrowFunctions;
