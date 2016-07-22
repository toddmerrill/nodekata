var total = 0;
var delayInvoc = function (a) {
    total = a ? total + a : total;
    return a ? delayInvoc : total;
};

module.exports = delayInvoc;
