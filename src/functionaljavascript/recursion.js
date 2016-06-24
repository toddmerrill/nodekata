function getDependencies(tree) {
    function treeWalk(dependencies, result) {
        var result = result || {};
        for (var dependency in dependencies) {
            var depString = dependency + '@' + dependencies[dependency].version;
            result[depString] = null; // using map keys to remove dupes - value not important
            dependencies[dependency].dependencies ? treeWalk(dependencies[dependency].dependencies, result) : result;
        }
        return result;
    }
    return tree.dependencies ? Object.keys(treeWalk(tree.dependencies)).sort() : [];
}

module.exports = getDependencies
