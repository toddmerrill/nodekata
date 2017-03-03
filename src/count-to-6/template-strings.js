const templateStrings = (name) => {
    return `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`;
}

console.log(templateStrings(process.argv[2]));

module.exports = templateStrings;
