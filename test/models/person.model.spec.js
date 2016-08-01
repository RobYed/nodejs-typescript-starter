describe("Person", function() {
    var Person = require('../../dist/models/person.model').Person;
    var person;

    beforeEach(function() {
        person = new Person("Fritz");
    });

    it("should display its name", function() {
        expect(person.getName()).toBe("Fritz");
    });
})