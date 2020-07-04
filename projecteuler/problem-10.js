/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
primeSummation(17) should return a number.
primeSummation(17) should return 41.
primeSummation(2001) should return 277050.
primeSummation(140759) should return 873608362.
primeSummation(2000000) should return 142913828922.
*/
function primeSummation(n) {
    //https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    //2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
    //2  3     5     7           11    13          17    19          23                29
    let uniquePrimes = new Set();
    let prime = []; 
    //create list of numbers from 1 to n
    for(let i=0;i<n;i++) 
        prime[i] = true; 
    
    //start from 2, 2 is a prime
    for(let p = 2; p*p <=n; p++) 
    { 
        // If prime[p] is not changed, then it is a prime 
        if(prime[p] == true) 
        { 
            // Update all multiples of p 
            for(let i = p*p; i <= n; i += p) 
                prime[i] = false; 
        } 
    } 
          
    // Print all prime numbers 
    for(let i = 2; i <= n; i++) 
    { 
        if (prime[i] == true) {
            uniquePrimes.add(i);            
        }
    } 
    let sum = 0;
    uniquePrimes.forEach(ele => sum += ele);
    return sum;
    
    // let uniquePrimes = new Set();
    // // Print the number of 2s that divide n 
    // while (n%2==0) 
    // { 
    //     uniquePrimes.add(2);
    //     n /= 2; 
    // } 
    // // n must be odd at this point.  So we can 
    // // skip one element (Note i = i +2) 
    // for (let i = 3; i <= Math.sqrt(n); i+= 2) 
    // { 
    //     // While i divides n, print i and divide n 
    //     while (n%i == 0) 
    //     { 
    //         uniquePrimes.add(i);
    //         n /= i; 
    //     } 
    // } 
    // // This condition is to handle the case whien 
    // // n is a prime number greater than 2 
    // if (n > 2) {
    //     uniquePrimes.add(n);
    // }
    // console.log('uniquesumes', uniquePrimes);
    // let sum = 0;
    // uniquePrimes.forEach(ele => sum += ele);
    // return sum;

    // let count = 0;
    // let prime = 1;
    // let start = 2;
    // while (prime <= n) {
    //     let isprime = true;
    //     for (let j = 2; j <= start; j++) {
    //         if ((start % j == 0) && (start != j)) {
                
    //             isprime = false;
    //             break;
    //         }
    //     }
    //     if (isprime) {
    //         //console.log(start + " is a prime");
    //         prime = start;
    //         if (start <= n) count = count + prime;
    //     }
    //     start++;
    // }
    // //console.log('count', count);
    // return count;
}

console.log('primeSum', primeSummation(10));  
console.log('primeSum', primeSummation(17));  
console.log('primeSum', primeSummation(2001));  
console.log('primeSum', primeSummation(140759));  
console.log('primeSum', primeSummation(2000000));
  