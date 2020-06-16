//number to binary
let num = 2147483647;
console.log(num.toString(2)); //1111111111111111111111111111111

//binary to number
let str = '1111111111111111111111111111111'
console.log(parseInt(str, 2)); //2147483647

//0000
//0001
//0010
//0011
//0100
//0101
//0110
//0111
//1000
str = '1000';
console.log(parseInt(str, 2));

//create masks
let FLAG_A = 1; // 0001
let FLAG_B = 2; // 0010
let FLAG_C = 4; // 0100
let FLAG_D = 8; // 1000
//actual flag
let flags = 5; //0101
//check flag
if (flags & FLAG_A) {
    console.log('flag A is set');
}
//set flag
flags |= FLAG_B;
console.log(flags.toString(2));
//get bit
//num - the input
//i - which bit to get
function getBit(num, i) {
 return ((num & (1 << i)) != 0); // (0111 & 1000) != 0
}
console.log(getBit(flags, 4));
