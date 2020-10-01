let hasOwnPropertySym = Symbol("hasOwnProperty");

let obj = {
    name: "Martin",
    age: 14,
    hasOwnProperty: "prop",
};

console.log(Object.prototype.hasOwnProperty.call(obj, "age"))
