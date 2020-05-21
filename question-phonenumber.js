/**
 * Input: "23"
   Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits == '') return [];
    strArr = [];
    strNum = digits.toString();
    nextStr = strNum.substring(1, strNum.length);
    if (1<strNum.length) {
        switch (nextStr.charAt(0)) { 
            case '0' :
                strArr.add(phoneNums[0][0]);
                return strArr;
            case '1' :
                strArr.add(phoneNums[1][0]);
                return strArr;
            default :
                nextNum = Number.parseInt(nextStr);
                strArr = letterCombinations(nextNum);
        }
    }
    orig = digits.toString();
    num = Number.parseInt(orig.substring(0,1));
    toRtn = [];
    if (strArr.length!=0) {
        for (inStr of strArr) {
            for (str of phoneNums[num]) {
                //sb = new String(inStr);
                //sb.insert(0, str);
                
                toRtn.push(str.concat(inStr));
            }
        }
    } else {
        for (str of phoneNums[num]) {
            strArr.push(str);
        }
    }
    return toRtn.length==0 ? strArr : toRtn;

};

phoneNums = [ 
    ["+"],//0
    [""],//1
    ["a","b","c"],//2
    ["d","e","f"],//3
    ["g","h","i"],//4
    ["j","k","l"],//5
    ["m","n","o"],//6
    ["p","q","r","s"],//7
    ["t","u","v"],//8
    ["w","x","y","z"],//9
];
console.log(phoneNums[2][0]);

console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
console.log('empty input', letterCombinations(''))
console.log(letterCombinations('4'))