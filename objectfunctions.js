//Factory function
function createPerson(name) {
    return {
        name: name,
        talk: function () {
            console.log('a person can talk');
        }
    }
}

const person = createPerson('ted');
person.talk();

//Constructor function
function Person(name) {
    this.name = name;
    this.talk = function () {
        console.log('a person can talk2');
    }
}

const person2 = new Person('ted2');
person2.talk();