/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
sumSquareDifference(10) should return a number.
sumSquareDifference(10) should return 2640.
sumSquareDifference(20) should return 41230.
sumSquareDifference(100) should return 25164150.
*/

function sumSquareDifference(n) {
    let numarr = numberRange(1, n);
    let sumThenSquare = 0;
    numarr.forEach(ele => sumThenSquare = sumThenSquare + ele);
    sumThenSquare = sumThenSquare * sumThenSquare;
    console.log('sumThenSquare', sumThenSquare);
    let squareThenSum = 0;
    numarr.forEach(ele => {
        let eleToAdd = ele * ele;
        squareThenSum = squareThenSum + eleToAdd;
    });
    console.log('squareThenSum', squareThenSum);
    return sumThenSquare - squareThenSum;
}

function numberRange (start, end) {
    return new Array((end+1) - start).fill().map((d, i) => i + start);
}

console.log('difference', sumSquareDifference(10));
console.log('difference', sumSquareDifference(20));
console.log('difference', sumSquareDifference(100));
