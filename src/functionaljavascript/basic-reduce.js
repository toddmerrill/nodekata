function countWords(inputWords, result) {
    var result = result || {};
    if (inputWords.length == 0) {
        return result;
    }
    result[inputWords[0]] = result[inputWords[0]] ? result[inputWords[0]] + 1 : 1;
    return countWords(inputWords.slice(1), result);
}

module.exports = countWords;
