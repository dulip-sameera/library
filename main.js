// Book
function Book(title, author, noOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.readStatus = readStatus;
}

Book.prototype = {
  setTitle(title) {
    this.title = title;
  },

  setAuthor(author) {
    this.author = author;
  },

  setNoOfPages(noOfPages) {
    this.noOfPages = noOfPages;
  },

  setReadStatus(readStatus) {
    this.readStatus = readStatus;
  },

  getTitle() {
    return this.title;
  },

  getAuthor() {
    return this.author;
  },

  getNoOfPages() {
    return this.noOfPages;
  },

  getReadStatus() {
    return this.readStatus;
  },
};

// Library
function Library() {
  this.data = [];
}

Library.prototype = {
  //add a book to the library
  add(title, author, noOfPages, readStatus) {
    this.data[this.data.length] = new Book(
      title,
      author,
      noOfPages,
      readStatus
    );
  },

  // return all books in the library
  getAllBooks() {
    return this.data;
  },

  // delete a book from library
  delete(id) {
    this.data.splice(id, 1);
  },

  changeReadStatus(id, readStatus) {
    this.data[id].setReadStatus(readStatus);
  },
};

// testing..

const myLibrary = new Library();
myLibrary.add("ad", "as", "232", true);
myLibrary.add("aasdd", "aasds", "22", false);
myLibrary.add("ads", "asfg", "222", true);
myLibrary.add("adhnf", "adaws", "432", true);
myLibrary.add("adfvsfhd", "dsas", "209", false);

console.table(myLibrary.getAllBooks());

myLibrary.changeReadStatus(2, false);

console.table(myLibrary.getAllBooks());
