function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(subElement) {
            return goodUsers.some(function(element) {
                return subElement.id === element.id;
            });
        });
    };
}

module.exports = checkUsersValid;
