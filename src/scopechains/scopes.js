function foo() {
    var bar = 'bla';
    quux = 'global'
    function zip() {
        var quux = 'ha!'
        bar = true;
    }
    return zip;
}

