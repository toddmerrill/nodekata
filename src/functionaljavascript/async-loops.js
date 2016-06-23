function loadUsers(userIds, load, done) {
    var users = []
    userIds.forEach(function(element, index, array){
        users.push(load(element, function() {return 'bla';}));
    });
    return done(users)
}

module.exports = loadUsers
