var delay = function (firstArg, secArg) {
    return function(secArg) {
        return firstArg + secArg;
    }
}

module.exports = delay;