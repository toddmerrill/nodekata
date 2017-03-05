const tagged = (args, name, comment) => {
    return args[0] + safe(name) + args[1] + safe(comment) + args[2]
}

const safe = str => str.replace(/&/g, "&amp;")
                       .replace(/"/g, "&quot;")
                       .replace(/</g, "&lt;")
                       .replace(/>/g, "&gt;")
                       .replace(/'/g, "&apos;");

// To verify in workshopper, uncomment below
// console.log(tagged`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

module.exports = tagged;
