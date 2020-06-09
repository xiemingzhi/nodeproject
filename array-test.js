//create array object 
//const myarr = [];
const myarr = [1,2,3];
console.log('typeof(myarr)', typeof(myarr)); //object

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
console.log(array1.pop()); //31
console.log('array1 length', array1.length);

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
array1.unshift(1, 3);
console.log(array1); //[1,3,5,12,8,130,44]

//The shift() method removes the first element from an array and returns that removed element.
const ele = array1.shift();
console.log(array1);
array1.unshift(ele);
console.log(array1);

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//start - The index at which to start changing the array.
//deleteCount Optional - An integer indicating the number of elements in the array to remove from start. If deleteCount is 0 or negative, no elements are removed. 
//item1, item2, ... Optional - The elements to add to the array, beginning from start. 
array1.splice(4, 2, 18, 30); //returns [8,130]
console.log(array1); //[1,3,5,12,18,30,44]

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
//where start and end represent the index of items in that array. 
console.log(array1.slice(4, 6)); //[18,30]

//double array
a = [['00', '01'], ['10']];
console.log('a[0][0]', a[0][0]);
console.log('a[0][1]', a[0][1]);
console.log('a[1][0]', a[1][0]);

//join array
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(''));
// expected output: "FireAirWater"
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
