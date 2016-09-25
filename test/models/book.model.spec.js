describe("Book", function() {
    var Book = require('../../dist/models/book.model').Book;
    var book;

    beforeEach(function() {
        book = new Book(
          'Security for Web Developers: Using JavaScript, HTML, and CSS',
          ['John Paul Mueller'],
          'As a web developer, you may not want to spend time making your web app secure, but it definitely comes with the territory.',
          '2016-01-14T23:00:00.000Z',
          '978-1491928646'
        );
    });

    it("expose its title as string", function() {
        expect(book.title).toBe('Security for Web Developers: Using JavaScript, HTML, and CSS');
        expect(typeof book.title).toBe('string');
    });

    it("expose its authors", function() {
        expect(book.authors).toEqual(['John Paul Mueller']);
        expect(Array.isArray(book.authors)).toBeTruthy();
    });

    it("expose its description", function() {
        expect(book.description).toBe('As a web developer, you may not want to spend time making your web app secure, but it definitely comes with the territory.');
        expect(typeof book.description).toBe('string');
    });

    it("expose its datePublished", function() {
        expect(book.datePublished).toBe('2016-01-14T23:00:00.000Z');
        expect(typeof book.datePublished).toBe('string');
    });
    
    it("expose its ISBN", function() {
        expect(book.ISBN).toBe('978-1491928646');
        expect(typeof book.ISBN).toBe('string');
    });
})