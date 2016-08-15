import * as express from 'express';
import { IBook, Book, BookExamples } from '../models/book.model';


interface IBooksController {
  getAllBooks(req: Express.Request, res: Express.Response): void;
  createBook(req: Express.Request, res: Express.Response): void;
  retrieveBook(req: Express.Request, res: Express.Response): void;
  updateBook(req: Express.Request, res: Express.Response): void;
  deleteBook(req: Express.Request, res: Express.Response): void;
}

export class BooksController {

  public static books: Array<IBook> = BookExamples;

  constructor() {
  }

  getAllBooks(req: express.Request, res: express.Response): void {
    let bookList: Array<{ id: Number, title: String }> = [];

    BooksController.books.forEach((book) => {
      bookList.push({ id: book.id, title: book.title });
    });

    res.send(bookList);
  }

  createBook(req: express.Request, res: express.Response): void {
    let book = new Book('test title', ['Robert Test'], 'some description', new Date(2014), '324-21435235');

    BooksController.books.push(book);

    res.send(book);
  }

  retrieveBook(req: express.Request, res: express.Response): void {
    let bookResult = BooksController.books.filter((book) => {
      return book.id === parseInt(req.params.bookId);
    });

    res.send(bookResult);
  }

  updateBook(req: express.Request, res: express.Response): void {

  }

  deleteBook(req: express.Request, res: express.Response): void {

  }

}