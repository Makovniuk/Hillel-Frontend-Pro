const object = {x: 100, y: 5, znak: '*'};

const OPERATIONS = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
  '%': (x, y) => y * (x / 100)
};

class SuperMath {
  input() {
    do {
      this.x = +prompt('Enter number x?');
    } while (isNaN(this.x));
    
    do {
      this.y = +prompt('Enter number y?');
    } while (isNaN(this.y));

    do {
      this.znak = prompt(`Enter some znak ${this.getOperations()} ?`);
    } while (!OPERATIONS[this.znak]);

    return OPERATIONS[this.znak](this.x, this.y);
  }

  check(obj) {
    const confirFromUser = confirm(`Do you want to do this ${obj.x} ${obj.znak} ${obj.y}?`);
    
    return confirFromUser ? OPERATIONS[obj.znak](obj.x, obj.y) : this.input();
  }

  getOperations() {
    return Object.keys(OPERATIONS).join(', ');
  }
}

const firstMath = new SuperMath();

console.log(firstMath.check(object));
