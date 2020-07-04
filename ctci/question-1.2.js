/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
String to array split
array sort
array join
*/
function isPermute(astr, bstr) {
    if (astr.length != bstr.length) return false;
    let asorted = astr.split('').sort().join();
    let bsorted = bstr.split('').sort().join();
    if (asorted === bsorted) return true;
}

console.log('ispermute(apple, eppla)', isPermute('apple', 'eppla'));
