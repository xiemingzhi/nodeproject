/*
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/
function isOneAway(astr, bstr) {
    let arra = astr.split('');
    let arrb = bstr.split('');
    if (arra.length > arrb.length) {
        let origa = astr.slice().split('');
        for (let i = 0; i <= arra.length; i++) {
            arra.splice(i, 1);
            if (arra.join() == arrb.join()) return true;
            arra = astr.slice().split('');
        }
    }
    if (arra.length < arrb.length) {
        for (let i = 0; i <= arrb.length; i++) {
            for (let j = 0; j < arra.length; j++) {
                arra.splice(j, 1, arrb[i]);
                if (arra.join() == arrb.join()) return true;
                arra = astr.slice().split('');
            }
        }
    }
    //arra.length == arrb.length
    for (let i = 0; i <= arrb.length; i++) {
        for (let j = 0; j < arra.length; j++) {
            arra.splice(j, 1, arrb[i]);
            if (arra.join() == arrb.join()) return true;
            arra = astr.slice().split('');
        }
    }

    return false;

    // if (astr.length > bstr.length) {
    //     for (let i = 0; i < astr.length; i++) {
    //         astr.slice()
    //     }
    // }
}

console.log('isoneaway(pale, ple)', isOneAway('pale', 'ple'));
console.log('isoneaway(pales, pale)', isOneAway('pales', 'pale'));
console.log('isoneaway(pale, bale)', isOneAway('pale', 'bale'));
console.log('isoneaway(pale, bake)', isOneAway('pale', 'bake'));

