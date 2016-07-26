var curriedFunction = function(fn) {
    var arity = fn.length;
    return function outer() {
        var outerArgs = Array.prototype.slice.call(arguments);
        if (outerArgs.length >= arity) {
            return fn.apply(null, outerArgs);
        }
        return function inner() {
            var innerArgs = Array.prototype.slice.call(arguments);
            return outer.apply(null, outerArgs.concat(innerArgs));
        }
    }
}

module.exports = curriedFunction;
