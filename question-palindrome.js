/**
 * @param {number} x
 * @return {boolean}
 */
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

input = 121;
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = -121;
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = 10;
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = 0;
console.log('input ', input, ' isPalindrome ', isPalindrome(input));
