function reverseArray(array) {
    let reverse = [];
    for (let el of array) {
        reverse.unshift(el);
    }
    return reverse;
}
console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array) {
    let placeholder;
    for (let i = 0; i < array.length / 2; i++) {
        placeholder = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = placeholder;
	}
	return array;
}

console.log(reverseArrayInPlace([1, 2, 3]));