import Calculator from "./calculator.js";

class Subtraction extends Calculator {
    constructor(x, y) {
        super(x, y)
    }

    subtraction() {
        return this.x - this.y;
    }
}

export default Subtraction