function curryN(fn, n) {
    function doCurry(arg) {

    };
    return doCurry;

    var n  = n ? n : arguments.length;
    var args = args || [];
    var count = 0;
    if (n == 0) {
        return fn.apply(fn,args);
    } else {
        args[count] = arg
        return curryN(arg, count++);
    }

    return function getCurry(arg, n) {

        return getCurry(count++)
    }()

    return n == 0 ? fn() : curryN(fn, --n);
    var args = [];
    var current = 0;
    return function (arg1) {
        return function (arg2) {
            return function (arg3) {
                //console.log(args[0] + ":" + args[1] + ":" + args[2])
                return fn(arg1, arg2, arg3);
            };
        };
    }

    return arguments.length === 0 ? fn()
}

module.exports = curryN
