function getDependencies(tree, result) {
    var result = result || {};
    var dependencies = tree.dependencies ? tree.dependencies : [];
    Object.keys(dependencies).forEach(function(dependency){
        var depString = dependency + '@' + dependencies[dependency].version;
        result[depString] = ''; // using map keys to remove dupes - value not important
        dependencies[dependency].dependencies ? getDependencies(dependencies[dependency], result) : result;
    });
    return Object.keys(result).sort();
}

module.exports = getDependencies
