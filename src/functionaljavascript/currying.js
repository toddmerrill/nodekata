function curryN(fn, n) {
    var arity = n || fn.length;
    return arity === 0 ? fn.apply(fn) : function resolveOrCurry() {
        var outerArgs = Array.prototype.slice.call(arguments);
        if (outerArgs.length >= arity) {
            return fn.apply(fn, outerArgs);
        }
        return function() {
            var innerArgs = Array.prototype.slice.call(arguments);
            return resolveOrCurry.apply(fn, outerArgs.concat(innerArgs));
        }
    }
}

module.exports = curryN
