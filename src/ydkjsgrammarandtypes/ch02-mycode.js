var _ = require('ramda');

var prepender = _.curry(function(toAppend) {
    return _.map(_.concat(toAppend));
});

var myApi = {
    prepender: prepender
}

module.exports = myApi;
