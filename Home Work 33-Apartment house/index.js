class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  arrayDwellers = [];

  addDweller(person) {
    this.arrayDwellers.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this.maxApartments = maxApartments; 
    this.arrayApartmets = [];
  }

  addApartment(apartmet) {
    this.arrayApartmets.length < this.maxApartments 
    ? this.arrayApartmets.push(apartmet)
    : console.log(`This house cannot contain more ${this.maxApartments} apartments!`);
  }
}

const personAnna = new Person('Anna', 'female');
const personDima = new Person('Dima', 'male');
const personOleg = new Person('Oleg', 'male');
const personLiza = new Person('Liza', 'female');

const apartmetnNumber1 = new Apartment();

apartmetnNumber1.addDweller(personAnna);
apartmetnNumber1.addDweller(personLiza);

const apartmetnNumber2 = new Apartment();

apartmetnNumber2.addDweller(personDima);
apartmetnNumber2.addDweller(personOleg);

const apartmetnNumber3 = new Apartment();

apartmetnNumber3.addDweller(personDima);
apartmetnNumber3.addDweller(personOleg);
apartmetnNumber3.addDweller(personAnna);
apartmetnNumber3.addDweller(personLiza);

const houseRcMalinki = new House(5);

houseRcMalinki.addApartment(apartmetnNumber1);
houseRcMalinki.addApartment(apartmetnNumber2);
houseRcMalinki.addApartment(apartmetnNumber3);

console.log(houseRcMalinki);

const houseRcArtlvile = new House(2);
houseRcArtlvile.addApartment(apartmetnNumber1);
houseRcArtlvile.addApartment(apartmetnNumber2);
houseRcArtlvile.addApartment(apartmetnNumber3);

console.log(houseRcArtlvile);
