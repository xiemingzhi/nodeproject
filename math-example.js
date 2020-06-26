let n = 600851475143;
//a = 2 + Math.floor(Math.random() % (n - 4));
a = 2 + Math.floor((Math.random() * Math.floor(n)) % (n - 4));
console.log('a', a);