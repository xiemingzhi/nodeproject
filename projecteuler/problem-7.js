/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
nthPrime(6) should return a number.
nthPrime(6) should return 13.
nthPrime(10) should return 29.
nthPrime(100) should return 541.
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743.
*/
function nthPrime(n) {
    let count = 0;
    let prime = 1;
    let start = 2;
    while (count != n) {
        let isprime = true;
        for (let j = 2; j <= start; j++) {
            if ((start % j == 0) && (start != j)) {
                
                isprime = false;
                break;
            }
        }
        if (isprime) {
            //console.log(start + " is a prime");
            prime = start;
            count++;
        }
        start++;
    }
    //console.log('count', count);
    return prime;
}
console.log('nthprime', nthPrime(6));  
console.log('nthprime', nthPrime(10));  
console.log('nthprime', nthPrime(100));  
console.log('nthprime', nthPrime(1000));  
console.log('nthprime', nthPrime(10001));
  