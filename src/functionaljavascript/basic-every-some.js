function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser){
            return goodUsers.some(function(goodUser){
                return submittedUser.id === goodUser.id;
            })
        })
    };
}

module.exports = checkUsersValid;

/*
var goodUsers = [{id:1},{id:2},{id:3}];

var checkValid = checkUsersValid(goodUsers);

console.log('valid1?:' + checkValid([{id:1},{id:3}]));
console.log('\n\nvalid2?:' + checkValid([{id:2},{id:4}]));
*/
