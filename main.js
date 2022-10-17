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
