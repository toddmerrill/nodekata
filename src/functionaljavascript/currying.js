function curryN(fn, n) {
    var arity = n || fn.length;
    return arity === 0 ? fn.call() : function outer() {
        var outerArgs = [...arguments];
        if (outerArgs.length >= arity) {
            return fn.apply(null, outerArgs);
        }
        return function inner() {
            var innerArgs = [...arguments];
            return outer.apply(null, outerArgs.concat(innerArgs));
        }
    }
}

module.exports = curryN;
