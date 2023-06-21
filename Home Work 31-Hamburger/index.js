const smalSizeHamburger = {price: 50, calories: 20};
const largeSizeHamburger = {price: 100, calories: 40};

const stuffingCheese = {price: 10, calories: 20};
const stuffingSalad = {price: 20, calories: 5};
const stuffingPotato = {price: 15, calories: 10};

const toppingMayo = {price: 20, calories: 5};
const toppingFlavoring = {price: 15, calories: 0};

class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];
    }

    addTopping(topping) {
        this.topping.push(topping);
        return this;
    }

    calculateCalories() {
        const toppingCalories = this.topping.reduce((accum, topping) => accum + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + toppingCalories;
    }

    calculatePrice() {
        const toppingPrice = this.topping.reduce((accum, topping) => accum + topping.price, 0);
        return this.size.price + this.stuffing.price + toppingPrice;
    }
}

// Гамбургер великого розміру із картоплею
const myHamburger = new Hamburger(largeSizeHamburger, stuffingPotato);

// скільки коштує
console.log(`Price: ${myHamburger.calculatePrice()}`);

// добавка  майонезу 
myHamburger.addTopping(toppingMayo);

// запитаємо скільки там калорій
console.log(`Calories: ${myHamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price with sause: ${myHamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
myHamburger.addTopping(toppingFlavoring);

// А скільки тепер коштує?
console.log(`Price with flavoring: ${myHamburger.calculatePrice()}`);

// запитаємо скільки там калорій з майонезом та приправою
console.log(`Total calories: ${myHamburger.calculateCalories()}`);
