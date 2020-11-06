function skipSpace(string) {
    let first = string.match(/^(\s|#.*)*/);
    return string.slice(first[0].length);
}

console.log("# My name is martin".match(/(\s|#)/));
console.log(skipSpace("Hello"));
