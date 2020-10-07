"use strict"


const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: ["Hi", "Bye"],
    get content() {
        if (this.locked) {
            throw new Error("Locked!");
        }
        return this._content;
    },
};

function withBoxUnlocked() {
    if (box.locked) {
        box.unlock();
        try {
            return box.content;
        } finally {
            box.lock();
        }
    } else {
        return box.content;
    }
}

console.log(withBoxUnlocked());
console.log(box.locked);
