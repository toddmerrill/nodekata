function reduce(arr, fn, initial) {
    return function recurser(total, index) {
        if (index === arr.length) {
            return total;
        }
        return recurser.call(fn, fn(total,arr[index],index,arr), index + 1);
    }(initial, 0);

}

module.exports = reduce;

