/*
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. 
EXAMPLE
Input: "Mr John Smith  ", 13
Output: "Mr%20John%20Smith"
*/
function URLify(astr, alen) {
    let urlarr = [];
    let trimstr = astr.trim(); //trim from both sides
    let strarr = trimstr.split('');
    for (let ch of strarr) {
        if (ch == ' ') {
            urlarr.push('%');
            urlarr.push('2');
            urlarr.push('0');
        } else {
            urlarr.push(ch);
        }
    }
    return urlarr.join('');
}

console.log(URLify('Mr John Smith  ', 13));
