function t1() {
    var blob = 't1'

    function t1test() {
        console.log(blob);
    }

    t1test();
}
t1();

function appendText(blob) {
    return function(text) {
        return console.log(text + blob);
    }
}

appendText('weee!')('mytext1 ');
appendText('whaaa?')('mytext2 ');

function t2() {
    var t2Test = appendText('jjjjjj!');
    t2Test('Totally cool text ');
}
t2();
