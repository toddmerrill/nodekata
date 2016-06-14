function duckCount() {

    return Array.prototype.slice.call(arguments).filter(function (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length;


    /*
    console.log(arguments)
    function countme(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack') ? 1 : 0;
    }

    return (function counter(index, args, value) {
        if (index == args.length) {
            return value;
        }
        console.log(args[index])
        return counter(index + 1, args, value + countme(args[index]));

    })(0, arguments, 0);
*/
/*
    var total = 0;
    for(duck of arguments) {
        total = Object.prototype.hasOwnProperty.call(duck, 'quack') ? total + 1 : total;
    }
    return total;
*/
}

module.exports = duckCount

var notDuck = Object.create({quack: true})
var notDuck2 = Object.create({quack: true})
var duck = {quack: true}
var duck2 = {quack: true}
var duck3 = {quack: true}
console.log('total: ' + duckCount(duck, notDuck, duck2, notDuck2, duck3));
