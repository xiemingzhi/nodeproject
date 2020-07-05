/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. 
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)
*/

function isPalindromPerm(astr) {
    const output = [];
    const setsuccess = new Set([]);
    const swapIndexes = function(arr, indexA, indexB) {
      const temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    };

    const generate = function(n, newArr) {
        if (n === 1) {
          strconcat = newArr.join('')
          if (!setsuccess.has(strconcat)) {
              //output.push(newArr.slice());
              if (isPalindrome(strconcat.replace(/ /g, ''))) output.push(newArr.slice());
              setsuccess.add(strconcat)  
          }else {
          }  
          return;
        }
    
        generate(n - 1, newArr);
    
        for (let i = 0; i < n - 1; i++) {
          if (n % 2 === 0) {
            swapIndexes(newArr, i, n - 1);
          } else {
            swapIndexes(newArr, 0, n - 1);
          }
    
          generate(n - 1, newArr);
        }
    };
    
    generate(astr.length, astr.toLowerCase().split(''));
    if (output.length > 0) {
        console.log('True (output length)', output.length);
        for (let perm of output) {
            console.log('permutations', perm.join(''));
        }
    }
}

var isPalindrome = function(x) {
    //console.log(x);
    if (x === undefined || x === null || x === '') return false;
    strx = '' + x;
    revstr = '';
    for (i = strx.length-1; i >= 0; i--) {
        revstr = revstr + strx[i];
    }
    //console.log(revstr);
    if (strx == revstr) return true;
    else return false;
};

isPalindromPerm('Tact Coa');
