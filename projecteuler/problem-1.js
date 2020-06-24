/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
multiplesOf3and5(10) should return a number.
multiplesOf3and5(49) should return 543.
multiplesOf3and5(1000) should return 233168.
multiplesOf3and5(8456) should return 16687353.
multiplesOf3and5(19564) should return 89301183.
*/
function multiplesOf3and5(number) {
    let res = 0;
    if (number < 3) return 0;
    for (let i=3; i < number; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            res = res + i;
        }
    }
    return res;
}
  
console.log(multiplesOf3and5(10));
console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(8456));
console.log(multiplesOf3and5(19564));
