// sum a list of numbers recursively
function sum(list) {
    if (!list || list.length === 0) {
        return 0;
    } else {
        return list[0] + sum(list.slice(1));
    }
}

module.exports = sum;
