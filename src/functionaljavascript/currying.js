function curryN(fn, n) {
    var n = n || fn.length;
    if (n == 0) {
        return fn();
    } else {
        return function(arg) {
            return curryN(fn.bind(fn, arg), n-1);
        }
    }
}

module.exports = curryN
