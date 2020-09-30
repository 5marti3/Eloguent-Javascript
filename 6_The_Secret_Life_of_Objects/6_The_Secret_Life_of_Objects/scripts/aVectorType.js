class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(Vector) {
        return new Vec(this.x + Vector.x, this.y + Vector.y);
    }
    minus(Vector) {
        return new Vec(this.x - Vector.x, this.y - Vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let vec1 = new Vec(2, 2);
let vec2 = new Vec(2, 2);

console.log(vec1.minus(vec2));
