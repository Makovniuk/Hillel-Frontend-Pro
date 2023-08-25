import Calculator from "./calculator.js";

class Division extends Calculator {
    constructor(x, y) {
        super(x, y)
    }

    division() {
        return this.x / this.y;
    }
}

export default Division

