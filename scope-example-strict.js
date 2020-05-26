'use strict'

//a = '1'
//this.a = '2'

//In strict mode, if the value of `this` is not set when entering an execution context, it is undefined
function f2() {
    'use strict'
    console.log(this) //undefined
    //console.log('this.a', this.a) //cannot read property 'a' of undefined error
    //To set the value of `this` to a particular value when calling a function, use call(), or apply()
    if (this != undefined) {
        console.log('this.a', this.a)
        this.a = 'f2 defined' //redefines `a`
        this.getA = (() => {
            return this.a;
        })
    }
    //this != globalThis
    //console.log(this)
    //console.log(globalThis)
}

f2();

var obj = {a: 'Custom'};
f2.call(obj);  // 'Custom' as this in the function is set to obj
f2.apply(obj); // 'Custom' as this in the function is set to obj
console.log(this.a) //strict mode `undefined`
console.log(f2.a) //undefined
//console.log(this.getA()) //TypeError this.getA is not a function
//console.log(f2.getA()) //TypeError f2.getA is not a function
