const templateStrings = (name) => {
    return `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
}

// To verify in workshopper, uncomment below
// console.log(templateStrings(process.argv[2]));

module.exports = templateStrings;
