//ECMAScript 2015 introduces class syntax to JavaScript
//ECMAScript 6 is also known as ES6 and ECMAScript 2015
class Person {
    //no private members in es6
    //let personalName = 'hidden name';

    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log('my name is ' + this.name);
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    lecture() {
        console.log(`${this.name} teaches ${this.subject}`);
    }

    talk() {
        console.log('overriding base talk method');
    }
}

const person1 = new Person('person1');
person1.talk();

const englishTeacher = new Teacher('Maggie', 'English');
englishTeacher.lecture();
englishTeacher.talk();
