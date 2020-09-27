function range(start, end, step) {
    let array = [];

    if (step < 0) {
        for (; start >= end; start += step) {
            array.push(start);
        }
    } else {
        for (; start <= end; start += step) {
            array.push(start);
        }
       
	}
	return array;
}

console.log(range(1, 30, 3));

function sum(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

console.log(sum(range(1, 30, 3)));
