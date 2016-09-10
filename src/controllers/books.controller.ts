import * as express from 'express';
import { logger } from '../logger';
import { IBook, Book } from '../models/book.model';
import { bookExample } from '../models/book.example';


interface IBooksController {
  getAllBooks(req: Express.Request, res: Express.Response): void;
  createBook(req: Express.Request, res: Express.Response): void;
  retrieveBook(req: Express.Request, res: Express.Response): void;
  updateBook(req: Express.Request, res: Express.Response): void;
  deleteBook(req: Express.Request, res: Express.Response): void;
}

class BooksController {

  public static books: Array<IBook> = [];

  constructor() {
    for (let book in bookExample) {
      BooksController.books.push( new Book(
        bookExample[book].title,
        bookExample[book].author,
        bookExample[book].description,
        new Date( bookExample[book].datePublished ),
        bookExample[book].ISBN
      ));
    }
  }

  getAllBooks(req: express.Request, res: express.Response): void {
    let bookList: Array<{ id: Number, title: String }> = [];

    BooksController.books.forEach((book) => {
      bookList.push({ id: book.id, title: book.title });
    });

    res.json(bookList);
  }

  createBook(req: express.Request, res: express.Response): void {
    let book: IBook;
    if (typeof req.body.title !== 'string' ||
        typeof req.body.author !== 'object' ||
        typeof req.body.description !== 'string' ||
        typeof req.body.ISBN !== 'string') {
          res.sendStatus(400);
          return;
    }

    book = new Book(
      req.body.title,
      req.body.author,
      req.body.description,
      new Date(2014),
      req.body.ISBN
    );

    BooksController.books.push(book);

    res.json(book);
  }

  retrieveBook(req: express.Request, res: express.Response): void {
    res.json(
      BooksController.findOneById(parseInt(req.params.bookId))
    );
  }

  updateBook(req: express.Request, res: express.Response): void {
    // TODO
  }

  deleteBook(req: express.Request, res: express.Response): void {
    res.json(
      BooksController.books.filter( (book) => book.id !== parseInt(req.params.bookId) )
    );
  }

  private static findOneById(bookId: Number): Array<IBook> {
    let bookResult = BooksController.books.filter((book) => {
      return book.id === bookId;
    });

    return bookResult;
  }

}

export const booksController = new BooksController();