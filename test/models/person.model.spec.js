describe("Person", function() {
    var Person = require('../../dist/models/person.model').Person;
    var person;

    beforeEach(function() {
        person = new Person("Fritz", 20);
    });

    it("should display its name", function() {
        expect(person.getName()).toBe("Fritz");
    });

    it("should display its age", function() {
        expect(person.getAge()).toBe(20);
    })
})