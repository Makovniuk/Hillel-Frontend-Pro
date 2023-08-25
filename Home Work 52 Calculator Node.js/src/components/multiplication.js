import Calculator from "./calculator.js";

class Multiplication extends Calculator {
    constructor(x, y) {
        super(x, y)
    }

    multiplication() {
        return this.x * this.y;
    }
}

export default Multiplication