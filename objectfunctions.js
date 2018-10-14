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
    let privateMember = 'private string';
    this.name = name;
    this.talk = function () {
        console.log('a person can talk2');
    }
    //ECMAScript 5 is also known as ES5 and ECMAScript 2009
    //Object property methods
    Object.defineProperty(this, 'showString', {
        get: function() {
            return privateMember;
        }
    });
}

const person2 = new Person('ted2');
person2.talk();
console.log('show string ' + person2.privateMember);//show string undefined
console.log('show string ' + person2.showString);
