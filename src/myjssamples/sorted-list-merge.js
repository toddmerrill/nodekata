// merge 2 sorted lists
function merge(list1, list2) {
    if (list1.length === 0 && list2.length === 0) {
        return [];
    }
    if (list1[0] < list2[0] ) {
        return [list1[0]].concat(merge(list1.slice(1),list2));
    } else {
        return [list2[0]].concat(merge(list1,list2.slice(1)));
    }
}

module.exports = merge;
