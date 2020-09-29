function flattening(array) {
    return array.reduce((a, b) => a.concat(b));
}

console.log(
    flattening([
        [1, 2],
        [3, 4],
    ])
);
