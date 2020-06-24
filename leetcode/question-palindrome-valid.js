/**
 * For the purpose of this problem, we define empty string as valid palindrome.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === undefined || s == null ) return false;
    if (s == '') return true;
    var x = s.replace(/[^a-z0-9]/gi,'');
    console.log(x);

    strx = '' + x.toLowerCase();
    revstr = '';
    for (i = strx.length-1; i >= 0; i--) {
        revstr = revstr + strx[i];
    }
    console.log(revstr);
    
    if (strx == revstr) return true;
    else return false;
};

input = "A man, a plan, a canal: Panama"
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = "race a car"
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = ''
console.log('input ', input, ' isPalindrome ', isPalindrome(input));

input = null
console.log('input ', input, ' isPalindrome ', isPalindrome(input));