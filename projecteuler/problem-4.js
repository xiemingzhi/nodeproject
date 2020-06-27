/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
largestPalindromeProduct(2) should return a number.
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.
a*b=c
(c/a)=b
iterate over `a` while decreasing `b`
*/
function largestPalindromeProduct(n) {
    let nstr = '';
    for (let i = 1; i <= n; i++) {
        nstr = nstr + '9';
    }
    //console.log(nstr);
    let nnum = Number.parseInt(nstr);
    //console.log(nnum);
    let largest = 0;
    // for (let i = nnum; i > 1; i--) {
    //     let testNum = i * nnum;
    //     if (isPalindrome(testNum)) {
    //         largest = testNum;
    //         console.log(largest, i, nnum);
    //         break;
    //     }
    // }
    //console.log(largest);
    // if (largest != 0) {
    //     let origNum = nnum;
    //     while (nnum > 1) {
    //         nnum--;
    //         for (let i = origNum; i > 1; i--) {
    //             let testNum = i * nnum;
    //             if (isPalindrome(testNum) && testNum > largest) {
    //                 console.log(testNum, i, nnum);
    //                 return testNum;
    //             }
    //         }
    //     }
    // }

    // let largesti = 1;
    // for (let i = nnum; i > 1; i--) {
    //     let testNum = i * nnum;
    //     if (isPalindrome(testNum)) {
    //         largest = testNum;
    //         largesti = i;
    //         console.log(largest, i, nnum);
    //         break;
    //     }
    // }
    // if (largest != 0) {
    //     while(largesti < nnum) {
    //         largesti++;
    //         nnum--;
    //         let testNum = largesti * nnum;
    //         if (isPalindrome(testNum) && testNum > largest) {
    //             console.log(testNum, largesti, nnum);
    //             //return testNum;
    //             largest = testNum;
    //         }
    //     }
    // }

    let origNum = nnum;
    for (let j = nnum; j > 1; j--) {
        for (let i = origNum; i > 1; i--) {
            let testNum = i * j;
            if (isPalindrome(testNum) && testNum > largest) {
                largest = testNum;
                console.log(largest, i, j);
                break;
            }
        }
    }

    return largest;
}

var isPalindrome = function(x) {
    //console.log(x);
    if (x === undefined || x === null || x === '') return false;
    let strx = '' + x;
    let revstr = '';
    for (let i = strx.length-1; i >= 0; i--) {
        revstr = revstr + strx[i];
    }
    //console.log(revstr);
    if (strx == revstr) return true;
    else return false;
};

//console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));