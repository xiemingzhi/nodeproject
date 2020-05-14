strx = '121';

console.log(strx.length);
console.log(strx[2]);

strx = '-121';
console.log(strx.substring(1, strx.length));

strx = '100';
strx = '1001';
//There are two ways to create a RegExp object: a literal notation and a constructor.
//- The literal notation's parameters are enclosed between slashes and do not use quotation marks.
//- The constructor function's parameters are not enclosed between slashes but do use quotation marks.
console.log(strx.replace(/[0]*$/, ''))