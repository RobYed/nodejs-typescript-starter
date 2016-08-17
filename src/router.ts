import { Router } from 'express';
import * as bodyParser from 'body-parser';
import { booksController } from './controllers/books.controller';

export let router = Router();

// convert http post data to json automatically
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
}));

// GET /books
// Get summary list of all books
router.get('/books', booksController.getAllBooks);

// POST /books
// Create a new book and return it
router.post('/books', booksController.createBook);

// GET /books/:bookId
// Get book by id
router.get('/books/:bookId', booksController.retrieveBook);

// PUT /books/:bookId
// Update an existing book and return it
router.put('/books/:bookId', booksController.updateBook);

// DELETE /books/:bookId
// Delete an existing book
router.delete('/books/:bookId', booksController.deleteBook);