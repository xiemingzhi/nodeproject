// == The equality operator converts the operands if they are not of the same type, then applies strict comparison. 
//If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.
console.log(1    ==  1);         // true
console.log('1'  ==  1);         // true
console.log(1    == '1');        // true
console.log(0    == false);      // true
console.log(0    == null);       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
console.log(object1 == object2); // false

// === The identity operator returns true if the operands are strictly equal (see above) with no type conversion.
console.log(3 === 3);   // true
console.log(3 === '3'); // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
console.log(object1 === object2); //false