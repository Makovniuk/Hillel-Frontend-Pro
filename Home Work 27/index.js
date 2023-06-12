function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;

  this.getInfo = function() {
    console.log(`Hello! My name is ${this.firstName}. I am ${this.age} years old!`);
  };
}

function Car(brand, model, yearOfIssue, color) {
  this.brand = brand;
  this.model = model;
  this.yearOfIssue = yearOfIssue;
  this.color = color;
  this.owner = null;

  this.assingOwner = function(person) {
    if (person.age > 18) {
      this.owner = person;
      console.log(`New owner car: ${person.firstName}!`);
    } else {
      console.log(`${person.firstName} is not an adult. Cannot be the owner of the car!`);
    };
  };

  this.getInfoCar = function() {
    console.log(`Car brand '${this.brand}' model '${this.model}' ${this.yearOfIssue} year of issue, color:'${this.color}.'`);

    return this.owner === null ? console.log('This car has no owner!') : this.owner.getInfo();  
  };
}

const personAnna = new Person('Anna', 25);
const personDmitrii = new Person('Dmitrii', 15);
const personAlex = new Person('Alex', 40);

const carToyota = new Car('Toyota', 'Camry', 2020, 'Black');
const carHonda = new Car('Honda', 'Accord Sport', 2023, 'Red');
const carTesla = new Car('Tesla', 'Model X', 2023, 'Grey');

carToyota.assingOwner(personAnna);
carToyota.getInfoCar();

carHonda.assingOwner(personDmitrii);
carHonda.getInfoCar();

carTesla.assingOwner(personAlex);
carTesla.getInfoCar();
