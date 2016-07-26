function curryN(fn, n) {
    var arity = n || fn.length;
    return arity === 0 ? fn.apply(null) : function resolve() {
        var resolveArgs = Array.prototype.slice.call(arguments);
        if (resolveArgs.length >= arity) {
            return fn.apply(null, resolveArgs);
        }
        return function recurse() {
            var recurseArgs = Array.prototype.slice.call(arguments);
            return resolve.apply(null, resolveArgs.concat(recurseArgs));
        }
    }
}

module.exports = curryN
