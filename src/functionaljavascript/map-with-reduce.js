module.exports = function(arr, fn) {
    return arr.reduce(function (result, item) {
        result.push(fn(item));
        return result;
    },[]);
}
