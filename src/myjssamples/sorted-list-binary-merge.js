// merge 2 sorted lists using binary recursion
function merge(list1, list2) {
    console.log('   l1:',list1,'l2',list2)
    if (list1.length === 0 && list2.length === 0) {
        return [];
    }
    // [-15,8,65,177],[-2,5,72,400]
    if (list1[0] < list2[0] ) {
        lista1 = list1.slice(1,list1.length / 2);
        lista2 = list2.slice(0,list2.length / 2);
        listb1 = list1.slice(list1.length / 2);
        listb2 = list2.slice(list2.length / 2);
        console.log('(',list1[0],') a1',lista1,'a2',lista2,'b1',listb1,'b2',listb2)
        var result1 = [list1[0]].concat(merge(lista1,lista2));
        var result2 = result1.concat(merge(listb1,listb2));
        return result2;
    } else {
        lista1 = list1.slice(0,list1.length / 2);
        lista2 = list2.slice(1,list2.length / 2);
        listb1 = list1.slice(list1.length / 2);
        listb2 = list2.slice(list2.length / 2);
        console.log('(',list2[0],') a1',lista1,'a2',lista2,'b1',listb1,'b2',listb2)
        var result1 = [list2[0]].concat(merge(lista1,lista2));
        var result2 = result1.concat(merge(listb1,listb2))
        return result2;
    }
}

module.exports = merge;
