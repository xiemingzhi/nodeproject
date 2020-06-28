/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
smallestMult(5) should return a number.
smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.
If none of a1, a2, . . . , ar is zero, then gcd( a1, a2, . . . , ar ) = gcd( gcd( a1, a2, . . . , ar-1 ), ar ).
gcd(a, b) is closely related to the least common multiple lcm(a, b): we have
gcd(a, b)⋅lcm(a, b) = |a⋅b|.
The above relation only holds for two numbers, 
LCM(a, b, c)\neq \frac{a*b*c}{gcd(a, b, c)}
*/
function smallestMult(n) {
    let narr = numberRange(1, n); 
    console.log(numberRange(1, n));

    let ans = (narr[0] * narr[1]) / gcd(narr[0], narr[1]);
    for (let i = 2; i < narr.length; i++) {
        let ansnew = (ans * narr[i]) / gcd(ans, narr[i]);
        console.log('newans', ansnew);
        ans = ansnew;
    }
    return ans;

    // let biggestNum = 1;
    // for (let i of narr) {
    //     biggestNum = biggestNum * i;
    // }
    // console.log('biggestNum', biggestNum);

    // let deno = findGCD(narr);
    // console.log('gcd', deno);
    // let lcm = biggestNum / deno;
    // return lcm;

    //does not work
    // let currNum = n;
    // let divisibleNotFound = true;
    // while (divisibleNotFound) {
    //     let numToMult = 1;
    //     let isDivisible = true;
    //     for (let i of narr) {
    //         if (currNum % i != 0) {
    //             isDivisible = false;
    //             numToMult = i;
    //             break;
    //         }
    //     }
    //     if (isDivisible) {
    //         divisibleNotFound = false;
    //         return currNum;
    //     } else {
    //         if (numToMult % 2 == 0)
    //             currNum = currNum * 2;
    //         else
    //             currNum = currNum * numToMult;
    //         divisibleNotFound = true;
    //     }
    //     console.log('currNum', currNum);
    // }

    // for (let j = 1; j < biggestNum; j++) {
    //     let isDivisible = true;
    //     for (let i of narr) {
    //         if (j % i != 0) {
    //             isDivisible = false;
    //             break;
    //         }
    //     }
    //     if (isDivisible) {
    //         return j;
    //     }
    // }

    // let divisibleNotFound = true;
    // let currBiggest = 1;
    // while (divisibleNotFound) {
    //     let isDivisible = true;
    //     for (let i of narr) {
    //         if (currBiggest % i != 0) {
    //             isDivisible = false;
    //         }
    //     }
    //     if (isDivisible) {
    //         return currBiggest;
    //     }
    //     currBiggest++;
    // }

    // let evenNumArr = evenNumberRange(2, n);
    // console.log('evens', evenNumArr);
    // let oddNumArr = oddNumberRange(2, n);
    // console.log('odds', oddNumArr);

}
 
function numberRange (start, end) {
    return new Array((end+1) - start).fill().map((d, i) => i + start);
}
function evenNumberRange(start, end) {
    let normalArr = numberRange(start, end);
    return normalArr.filter(num => num % 2 == 0);
}
function oddNumberRange(start, end) {
    let normalArr = numberRange(start, end);
    return normalArr.filter(num => num % 2 != 0);
}

function gcd(a, b) {
    let res = 0;
    while (b > 0){
       let temp = b;
       b = a % b;
       a = temp;
       res = a;
    }
    return res;
} 
// Function to find gcd of array of numbers 
function findGCD(arr) {
    let result = gcd(arr[0],arr[1]);
    for (let i = 2; i < arr.length; i++) {
        result = gcd(result, arr[i]);
        // if (result == 1) {
        //     return 1;
        // }
    }
    return result;
} 
    
//console.log('smallestMult', smallestMult(5));
//console.log('smallestMult', smallestMult(6));
//console.log('smallestMult', smallestMult(7));
//console.log('smallestMult', smallestMult(8));
//console.log('smallestMult', smallestMult(10));
//console.log('smallestMult', smallestMult(13));
console.log('smallestMult', smallestMult(20));
  