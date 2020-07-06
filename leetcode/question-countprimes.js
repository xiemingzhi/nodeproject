/**
 * Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
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
    return uniquePrimes.size;
};

console.log('countprimes', countPrimes(10));
