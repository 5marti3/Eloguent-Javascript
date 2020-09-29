function arrayToList(array) {
    let list = {};

    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
    let array = [];
    for (let node = list; node.value != undefined; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([1, 2, 3])));

function prepend(el, list) {
    let list2 = {};

    list2.value = el;
    list2.rest = list;

    return list2;
}

console.log(prepend(0, arrayToList([1, 2, 3])));

function nth(list, num) {
    for (let node = list; node; node = node.rest) {
        if (node.value - 1 == num) {
            return node.value;
        }
    }
}

console.log(nth(arrayToList([1, 2, 3]), 1));

function nthRec(list, num) {
    if (num == 0) {
        return list.value;
    } else {
        list = list.rest;
        return nthRec(list, num - 1);
    }
}

console.log(nthRec(arrayToList([1, 2, 3, 4]),2 ));
