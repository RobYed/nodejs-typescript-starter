export class Person {
    name: String
    age: Number

    constructor(name: String, age: Number) {
        this.name = name;
        this.age = age;
    }

    getName(): String {
        return this.name;
    }

    getAge(): Number {
        return this.age;
    }
}