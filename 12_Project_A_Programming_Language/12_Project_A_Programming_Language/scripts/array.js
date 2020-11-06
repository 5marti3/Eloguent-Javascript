topScope.array = (...values) => {
    let array = [];
    for (let val of values) {
        array.push(val);
    }
    return array;
};

topScope.length = (array) => {
    return array.length;
};

topScope.element = (array, n) => {
    return array[n];
};
