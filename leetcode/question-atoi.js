/**
 * Input: "   -42"
   Output: -42
   Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

   Input: "4193 with words"
   Output: 4193
   Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

   Input: "words and 987"
   Output: 0
   Explanation: The first non-whitespace character is 'w', which is not a numerical 
                digit or a +/- sign. Therefore no valid conversion could be performed.

   Input: "-91283472332"
   Output: -2147483648
   Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.

   "3.14159"
   "3"

   ".1"
   "0"

   "+-2"
   "0"

   starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

   If the first sequence of non-whitespace characters in str is not a valid integral number, 
   or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

   If no valid conversion could be performed, a zero value is returned.

 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trimLeft()
    if (str == '') return 0
    let re = /^(\.|[a-zA-Z])+/
    if (str.match(re)) return 0  
    //very big number just need the number
    let re2 = /^(\-|\+)?([0-9])+/
    if (!str.match(re2)) return 0  
    let sign = ''
    if (str[0] == '-') {
        sign = '-'
        if (str.length >= 2) str = str.substring(1, str.length)
        else str = '0'
    } else if (str[0] == '+') {
        sign = ''
        if (str.length >= 2) str = str.substring(1, str.length)
        else str = '0'
    }
    //very big number just need the number
    re2 = /([0-9])+/
    let match = re2.exec(str)
    revstr = ''
    if (match) {
        console.log('match found', match[0])
        revstr = match[0]
    }
    revstr = sign + revstr 

    if (Number.parseInt(revstr) >= 2147483647) {
        return 2147483647
    }
    if (Number.parseInt(revstr) <= -2147483648) {
        return -2147483648
    }
    return Number.parseInt(revstr)
};

input = "words and 987"
input = "   -42"
//input = "   +42"
//input = "   42"
//input = "-91283472332"
//input = "+91283472332"
input = "3.14159"
input = ".1"
input = ""
input = "+"
input = "-"
input = "1"
console.log(myAtoi(input))