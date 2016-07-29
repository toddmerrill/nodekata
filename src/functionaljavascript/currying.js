function curryN(fn, n) {
    var arity = n || fn.length;
    return arity === 0 ? fn.call(null) : function outer() {
        var outerArgs = argsArray(arguments);
        return outerArgs.length >= arity ? fn.apply(null, outerArgs) : function() {
            return outer.apply(null, outerArgs.concat(argsArray(arguments)));
        }
    };
}

function argsArray(args) {
    return Array.prototype.slice.call(args);
}
module.exports = curryN
