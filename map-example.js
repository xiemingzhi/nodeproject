let myMap = new Map()
myMap.set('bla','blaa')
myMap.set('bla2','blaa2')
console.log(myMap)  // Map { 'bla' => 'blaa', 'bla2' => 'blaa2' }

myMap.has('bla')    // true
console.log(myMap.get('bla'))