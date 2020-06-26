/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
//list prime factors - return largest (very important hint is given in the first line)
largestPrimeFactor(2) should return a number.
largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(8) should return 2.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/
function largestPrimeFactor(number) {
    let largest = 1;
    // for (let i = 1; i <= number; i++) {
    //     if (number % i != 0) continue; //check is factor
    //     //let isprime = true;
    //     // for (let j = 2; j <= i; j++) { //check for prime
    //     //     if (i % j == 0 && i != j) { 
    //     //         isprime = false;
    //     //         break;
    //     //     }
    //     // }
 
    //     //if (isprime) largest = i;
    //     //if (isPrime(i)) largest = i;
    //     //if (isPrime(i, 3)) largest = i;
    // }
    largest = Math.max(...primeFactors(number));
    return largest;
}

function primeFactors(n) {
  let arr = [];
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    //System.out.print(2 + " ");
    arr.push(2);
    n /= 2;
  }

  // n must be odd at this point.  So we can
  // skip one element (Note i = i +2)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      //System.out.print(i + " ");
      arr.push(i);
      n /= i;
    }
  }

  // This condition is to handle the case whien
  // n is a prime number greater than 2
  if (n > 2) {
    //System.out.print(n);
    arr.push(n);
  }
  return arr;
} 
    
//check for number prime or not 
function isPrime(n) {
  //check if n is a multiple of 2
  if (n % 2 == 0) return false;
  //if not, then just check the odds
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

function power(a, n, p) {
  // Initialize result
  let res = 1;

  // Update 'a' if 'a' >= p
  a = a % p;

  while (n > 0) {
    // If n is odd, multiply 'a' with result
    if ((n & 1) == 1) res = (res * a) % p;

    // n must be even now
    n = n >> 1; // n = n/2
    a = (a * a) % p;
    //console.log('n', n);
  }
  return res;
} 

function isPrime(n, k) {
  // Corner cases
  if (n <= 1 || n == 4) return false;
  if (n <= 3) return true;

  // Try k times
  while (k > 0) {
    // Pick a random number in [2..n-2]
    // Above corner cases make sure that n > 4
    let a = 2 + Math.floor((Math.random() * Math.floor(n)) % (n - 4));
    console.log('a', a);
    // Fermat's little theorem
    if (power(a, n - 1, n) != 1) return false;

    k--;
  }

  return true;
} 

console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(8));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
