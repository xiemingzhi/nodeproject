/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. 
*/

function isUnique(str) {
    let s = new Set();
    for (c of str) {
        if (s.has(c)) return false;
        else s.add(c)
    }
    return true;
}

console.log('isUnique(apple)', isUnique('apple'))
console.log('isUnique(boy)', isUnique('boy'))