function reduce(arr, fn, initial) {
    return (function recurseIt(index, value){
        return index == arr.length ? value : recurseIt(index + 1, fn(value,arr[index],index,arr));
    })(0,initial);
}

module.exports = reduce;

/*
console.log('result: ' + reduce([1,2,3], function(prev, curr, index, arr) {
    return prev + curr;
},0));
*/
