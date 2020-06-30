/*
Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.
*/
function countWays(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (n == 3) return 4; //1; 1,2; 2,1; 3
    //1; 2,2; 1,2,1; 1,3; 2,1,1; 1,1,2; 3,1
    let a = 4;
    let b = 2;
    let c = 1;
    let d = 0;
    for (let i = 4; i <= n; i++) {
        d = a + b + c;
        c = b;
        b = a;
        a = d;
    }
    return d;
}

console.log('countways(1)', countWays(1));
console.log('countways(2)', countWays(2));
console.log('countways(3)', countWays(3));
console.log('countways(4)', countWays(4));
console.log('countways(5)', countWays(5));