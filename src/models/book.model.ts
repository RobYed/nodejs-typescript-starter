export interface IBook {
  id: Number;
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