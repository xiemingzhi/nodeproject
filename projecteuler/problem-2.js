/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
fiboEvenSum(10) should return a number.
fiboEvenSum(10) should return 10.
fiboEvenSum(60) should return 44.
fiboEvenSum(1000) should return 798.
fiboEvenSum(100000) should return 60696.
fiboEvenSum(4000000) should return 4613732.
Your function should return an even value.
*/
function fiboEvenSum(n) {
    let sum = 0;
    let fibPrev = 1;
    let fibCurr = 1;
    while (fibCurr < n) {
        let temp = fibCurr;
        fibCurr = fibCurr + fibPrev; 
        fibPrev = temp;
        if (fibCurr % 2 == 0) {
            sum = sum + fibCurr;
        }
    }
    return sum;
}
  
console.log(fiboEvenSum(10));
console.log(fiboEvenSum(60));
console.log(fiboEvenSum(1000));
console.log(fiboEvenSum(100000));
console.log(fiboEvenSum(4000000));