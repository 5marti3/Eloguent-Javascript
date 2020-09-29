function deepEqual(a, b) {
    if (typeof a == "object" && typeof b == "object") {
        let propsA = Object.keys(a);
        let propsB = Object.keys(b);
        if (!(propsA.length == propsB.length)) {
            return false;
        } else {
            for (let i = 0; i < propsA.length; i++) {
                if (!(propsA[i] == propsB[i])) {
                    return false;
                } else {
                    for (let j = 0; j < propsA.length; j++) {
                        if (!deepEqual(a[propsA[j]], b[propsB[j]])) {
                            return false;
                        }
                    }
                }
            }
        }
    } else if (a !== b) {
        return false;
    }

    return true;
}

let a = { number: 1, number2: 2 };
let b = { number: 1, number2: 3 };

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
