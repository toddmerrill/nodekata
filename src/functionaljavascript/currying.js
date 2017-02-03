function curryN(fn, n) {
    const arity = n || fn.length;
    return arity <= arguments.length ? fn(...arguments) : function outer() {
        var outerArgs = [...arguments];
        if (arity <= outerArgs.length) {
            return fn(...outerArgs);
        }
        return function() {
            return outer(...outerArgs.concat(...arguments));
        }
    }
}

module.exports = curryN;
