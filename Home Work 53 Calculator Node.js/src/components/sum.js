import Calculator from "./calculator.js";

class Sum extends Calculator {
    constructor(x, y) {
        super(x, y)
    }

    sum() {
        return this.x + this.y;
    }
}

export default Sum