let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];
console.log(arrB);

let jsonA = [
    {
        name: 'john',
        job: 'janitor'
    },
    {
        name: 'mary',
        job: 'maid'
    }
]

let jsonB = [...jsonA, {
    name: 'david',
    job: 'guide'
}]

console.log(jsonB);