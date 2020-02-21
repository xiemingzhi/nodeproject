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

//Using prototypes for object inheritance
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
let f = function () {
    this.a = 1;
    this.b = 2;
}
let o = new f();
f.prototype.b = 3;
f.prototype.c = 4;
console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

function Teacher(name) {
    this.name = name;
    this.lecture = function() {
        console.log(this.name + ' i can teach');
    }
}

function talkFast() {
    console.log('I am a teacher I talk fast.');
}
//use composition inherit only what you need
//Teacher.prototype.talk = Person.talk; does not work
Teacher.prototype.talk = person2.talk;
//Teacher.prototype.talk = talkFast;//overriding
const goodTeacher = new Teacher('Mr Smith');
//goodTeacher.prototype.talk = person2.talk; does not work
goodTeacher.talk();//no prototype - goodTeacher.talk is not a function
goodTeacher.lecture();

console.log ('print object');
console.log(goodTeacher);
