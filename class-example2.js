//Both Public and private field declarations are an experimental feature (stage 3) proposed at TC39, the JavaScript standards committee.
//install node 12.16.3
class ClassWithPrivateField {
    #privateField
    
    constructor() {
      this.#privateField = 42
      //this.#randomField = 666 // Syntax error
    }

    getPrivateField() {
      return this.#privateField
    }
}
  
const instance = new ClassWithPrivateField()
//instance.#privateField === 42 // Syntax error
console.log(instance.getPrivateField())
