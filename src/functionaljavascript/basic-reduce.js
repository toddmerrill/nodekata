function countWords(inputWords) {
    return inputWords.reduce(function (result, item) {
        result[item] = result[item] ? result[item] + 1 : 1;
        return result;
    },{});
}

module.exports = countWords;

/*
var input = ['pizza', 'toilet', 'bla', 'pizza', 'bla', 'bloo', 'toilet'];

console.log(countWords(input));
*/
