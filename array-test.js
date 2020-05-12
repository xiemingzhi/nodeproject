
//The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
const found1 = array1.find(function (element) {
    if (element > 10) return element;
    else return false;
})
console.log(found1);//12

//findIndex Returns the found index in the array, if an element in the array satisfies the testing callbackFn, or -1 if not found.
const foundIndex = array1.findIndex(element => element > 10);
console.log(foundIndex);

//indexof Returns the first (least) index of an element within the array equal to searchElement, or -1 if none is found.
console.log(array1.indexOf(12));

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
array1.push(31);
console.log(array1);

//The pop() method removes the last element from an array and returns that element. 
console.log(array1.pop(31));
