class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (this.members.indexOf(value) < 0) {
            this.members.push(value);
        }
    }
    delete(value) {
        this.members = this.members.filter((val) => val !== value);
    }
    has(value) {
        return this.members.includes(value);
    }

    static from(object) {
        let group = new Group();
        for (let value of object) {
            group.add(value);
        }
        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {
        if (this.index == this.group.members.length) return { done: true };
        let value = this.group.members[this.index];
        this.index++;
        return { value, done: false };
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
};

let test = new Group();
test.add(1);
test.add(2);

let It = test[Symbol.iterator]();

console.log(test);
console.log(It.next());
console.log(It.next());
console.log(It.next());

for (let value of Group.from([1, 2, 3, 4])) {
    console.log(value);
}
