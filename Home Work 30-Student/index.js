today = new Date();

class Student {
    constructor(firstName, secondName, yearOfBirth, arrayMarks) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearOfBirth = yearOfBirth;
        this.arrayMarks = arrayMarks;
        this.arrayVisit = [];
    }

    getAgeStudent() {
        return today.getFullYear() - this.yearOfBirth;
    }

    getAverageMark() {
       return this.arrayMarks.reduce((a,b) => b + a) / this.arrayMarks.length; 
    }

    present() {
        this.arrayVisit.length < 25 
        ? this.arrayVisit.unshift(true) 
        : console.log('Array length cannot be more than 25 elements!');
        return this;
    }

    absent() {
        this.arrayVisit.length < 25
        ? this.arrayVisit.unshift(false) 
        : console.log('Array length cannot be more than 25 elements!');
        return this;
    }

    getAverageVisit() {
        const counter = this.arrayVisit.filter(item => item);
        const averageVisit = counter.length / this.arrayVisit.length;
        return averageVisit ? averageVisit : 'Student was not in class!';
    }

    sumarry() { 
        return this.getAverageMark() > 90 && this.getAverageVisit() > 0.9
        ? `Good job!`
        : this.getAverageMark() < 90 && this.getAverageVisit() < 0.9 || this.getAverageVisit() === 'Student was not in class!'
        ? `Rediska!`
        : `Good, but could be better!`;
    }

    getAllInfoAboutStudent() {
        console.log(`Student's full name: ${this.firstName} ${this.secondName}`);
        console.log(`Student age: ${this.getAgeStudent()}`);
        console.log(`Average student mark: ${this.getAverageMark()}`);
        console.log(`Average student attendance: ${this.getAverageVisit()}`);
        console.log(`Student learning process: ${this.sumarry()}`);
        console.log('------------------------------------');
    }
};

const studentPetro = new Student('Petro', 'Podgornii', 1991, [100, 100, 95, 100, 100]);

studentPetro.absent().present().present().present();
console.log(studentPetro.getAverageVisit());
console.log(studentPetro.getAverageMark());
studentPetro.getAllInfoAboutStudent();


const studentAnna = new Student('Anna', 'Anisimova', 1990, [100, 100, 100, 100, 100]);

studentAnna.present().present().present().present();
console.log(studentAnna.getAverageVisit());
console.log(studentAnna.getAverageMark());
studentAnna.getAllInfoAboutStudent();

const studentDima = new Student('Dima', 'Sokolov', 1988, [75, 75, 80, 60, 60]);

studentDima.absent().absent().absent().absent();
console.log(studentDima.getAverageVisit());
console.log(studentDima.getAverageMark());
studentDima.getAllInfoAboutStudent();
