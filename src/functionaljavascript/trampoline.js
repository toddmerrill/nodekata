function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return function(){return repeat(operation, --num);}
}

function trampoline(fn) {
    return function(){
        var res = fn.apply(this, arguments);
        while(res instanceof Function){
            res = res();
        }
        return res;
    }
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat)(operation, num);
}
