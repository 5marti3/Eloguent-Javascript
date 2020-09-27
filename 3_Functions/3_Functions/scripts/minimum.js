function min(a, b) {
    if (a < b) {
        return a;
    } else if (b < a) {
        return b;
    } else {
        return "Equal";
    }
}


console.log(min(4, 4));