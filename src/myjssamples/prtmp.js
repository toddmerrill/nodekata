const f1 = function() {
    let value = '44';
    return {
        then: function(f) {
            f(value);
        }
    }
}

f1().then(function(value) { console.log('val is', value)});
