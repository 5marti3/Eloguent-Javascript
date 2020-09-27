function arrayToList(array) {
    let list = {};
    while (array.length > 0) {
        list.value = array[array.length - 1];
        array.pop();
        list.rest = arrayToList(array);
    }
    return list;
}
console.log(arrayToList([1, 2, 3]));
