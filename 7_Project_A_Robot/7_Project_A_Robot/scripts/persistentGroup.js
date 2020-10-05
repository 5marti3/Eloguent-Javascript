class PGroup {
    constructor(members) {
        this.members = members;
    }

    add(value) {
        if (!this.has(value)) {
            let newGroup = new Group(this.members.concat(value));
            return newGroup;
        }
    }
    delete(value) {
        if (this.has(value)) {
            let newGroup = new Group(this.members.filter((x) => x !== value));
            return newGroup;
        }
    }
    has(value) {
        return this.members.includes(value);
    }
}
PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
