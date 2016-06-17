function Spy(target, method) {
    var counter = {count:0};
    var orig = target[method];
    target[method] = function () {
        counter.count++
        orig.apply(target, arguments)
    };
    return counter;
}

module.exports = Spy;
