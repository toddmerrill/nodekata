const makeTree = (data, parent) => {
    let node = {};
    data.filter((line) => {
        return line.parent === parent;
    }).forEach(line => {
        node[line.id] = makeTree(data, line.id);
    });
    return Object.keys(node).length === 0 ? null : node;
}

module.exports = makeTree;
