export interface IBook {
  id: Number,
  title: String;
  authors: Array<String>;
  description: String;
  datePublished: Date;
  ISBN: String;
}

export class Book implements IBook {
  id: Number;
  dateCreated: Date;
  dateUpdated: Date;

  static lastId: any = 0;

  constructor(
      public title: String,
      public authors: Array<String>,
      public description: String,
      public datePublished: Date,
      public ISBN: String) {
    this.id = Book.generateId();
    this.dateCreated = new Date(),
    this.dateUpdated = this.dateCreated;
  }

  static generateId(): any {
    return Book.lastId += 1;
  }
}

export let BookExamples: Array<IBook> = [
  new Book(
    'Security for Web Developers: Using JavaScript, HTML, and CSS',
    ['John Paul Mueller'],
    'As a web developer, you may not want to spend time making your web app secure, but it definitely comes with the territory. ' +
    'This practical guide provides you with the latest information on how to thwart security threats at several levels, ' +
    'including new areas such as microservices. You will learn how to help protect your app no matter where it runs, ' +
    'from the latest smartphone to an older desktop, and everything in between.',
    new Date(2015, 12, 15),
    '978-1491928646'
  ),
  new Book(
    'Site Reliability Engineering: How Google Runs Production Systems',
    ['Betsy Beyer', 'Chris Jones', 'Jennifer Petoff', 'Niall Richard Murphy'],
    'The overwhelming majority of a software system'+"'"+'s lifespan is spent in use, not in design or implementation. ' +
    ' So, why does conventional wisdom insist that software engineers focus primarily on the design and development of ' +
    'large-scale computing systems?',
    new Date(2016, 4, 8),
    '978-1491929124'
  )
]