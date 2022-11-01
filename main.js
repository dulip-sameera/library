// Book

class Book {
  constructor(title, author, noOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
  }

  // Getters and Setters
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    this._author = author;
  }

  get noOfPages() {
    return this._noOfPages;
  }

  set noOfPages(noOfPages) {
    this._noOfPages = noOfPages;
  }

  get readStatus() {
    return this._readStatus;
  }

  set readStatus(readStatus) {
    this._readStatus = readStatus;
  }
}

// // Library
class Library {
  constructor() {
    this.data = [];
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  addBook(title, author, noOfPages, readStatus) {
    const book = new Book(title, author, noOfPages, readStatus);
    this.data[this.data.length] = book;
  }

  deleteBook(index) {
    this.data.splice(index, 1);
  }

  changeBookReadStatus(index, readStatus) {
    this.data[index].readStatus = readStatus;
  }

  getAllBooks() {
    return this.data;
  }
}

// UI functions

// card

class Card {
  constructor(id, title, author, noOfPages, readStatus) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.readStatus = readStatus;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    this._author = author;
  }

  get noOfPages() {
    return this._noOfPages;
  }

  set noOfPages(noOfPages) {
    this._noOfPages = noOfPages;
  }

  get readStatus() {
    return this._readStatus;
  }

  set readStatus(readStatus) {
    this._readStatus = readStatus;
  }

  create(element) {
    const card = document.createElement("div");
    card.classList.add("card");

    // create delete button
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-btn");

    // add delete button to card
    card.appendChild(deleteBtn);

    // create delete button image
    const deleteBtnImage = document.createElement("div");
    deleteBtnImage.classList.add("delete-btn-image");
    deleteBtnImage.setAttribute("data-delete", this.id);

    // add delete btn image to delete btn
    deleteBtn.appendChild(deleteBtnImage);

    // creating book content
    const bookContent = document.createElement("div");
    bookContent.classList.add("book-content");

    // adding book content to card
    card.appendChild(bookContent);

    // book title
    const bookTitle = document.createElement("h1");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = this.title;

    // adding book title to book content
    bookContent.appendChild(bookTitle);

    // creating "By" statement
    const byStatement = document.createElement("p");
    byStatement.textContent = "By";

    // add "by" statement to book content
    bookContent.appendChild(byStatement);

    // book author
    const bookAuthor = document.createElement("h2");
    bookAuthor.classList.add("book-author");
    bookAuthor.textContent = this.author;

    // add book author to book content
    bookContent.appendChild(bookAuthor);

    // no of pages
    const noOfBookPages = document.createElement("p");
    noOfBookPages.textContent = `(${this.noOfPages} pages)`;

    // add no of pages to book content
    bookContent.appendChild(noOfBookPages);

    // create have read
    const bookReadStatus = document.createElement("div");
    bookReadStatus.classList.add("book-read-status");

    // add book read status to book content
    bookContent.appendChild(bookReadStatus);

    // book read label
    const haveReadLabel = document.createElement("p");
    haveReadLabel.textContent = "Have read?";

    // add have read label to book read status
    bookReadStatus.appendChild(haveReadLabel);

    // create read options
    const readStatusOptions = document.createElement("div");
    readStatusOptions.classList.add("read-status-options");

    // add read status options to book read status
    bookReadStatus.appendChild(readStatusOptions);

    // create yes button
    const yesBtn = document.createElement("button");
    yesBtn.classList.add("yes");
    yesBtn.textContent = "Yes";
    yesBtn.setAttribute("data-id", this.id);

    // add yes button to read status options
    readStatusOptions.appendChild(yesBtn);

    // create no button
    const noBtn = document.createElement("button");
    noBtn.classList.add("no");
    noBtn.textContent = "No";
    noBtn.setAttribute("data-id", this.id);

    // setting read status
    if (this.readStatus) {
      yesBtn.classList.add("yesSelected");
    } else {
      noBtn.classList.add("noSelected");
    }

    // add no button to read status options
    readStatusOptions.appendChild(noBtn);

    // add card to main content
    element.appendChild(card);
  }
}

// Render
// document.getElementById("content")
class Render {
  static showLibrary(data, element) {
    element.innerHTML = "";
    data.forEach((book, index) => {
      const card = new Card(
        index,
        book.title,
        book.author,
        book.noOfPages,
        book.readStatus
      );
      card.create(element);
    });
  }
}

// all input valid flag
let validInputs = false;

// validate noOfPages input
function validateNoPageInput(inputString) {
  const validInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inputArray = inputString.split("");
  // console.log(inputArray);
  let valid = true;
  let errorMsg = "";
  if (inputArray.length !== 0) {
    inputArray.forEach((key) => {
      if (!validInput.includes(key)) {
        valid = false;
        errorMsg = "Not a Number";
        return;
      }
    });
  } else {
    valid = false;
    errorMsg = "Can't be empty";
  }
  return {
    valid: valid,
    errorMsg: errorMsg,
  };
}

// input fields
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const noOfPagesInput = document.getElementById("noOfPages");
const readStatusInputs = document.querySelectorAll('input[name="readStatus"]');
const contentContainer = document.getElementById("content");

const errorMsg = document.getElementById("error-msg");

noOfPagesInput.addEventListener("keyup", function () {
  const validInput = validateNoPageInput(noOfPagesInput.value);
  // console.log(validInput);
  if (validInput.valid) {
    validInputs = true;
    errorMsg.classList.remove("show-error-msg");
    errorMsg.classList.add("hide-error-msg");
    noOfPagesInput.classList.remove("invalid-input");
  } else {
    validInputs = false;
    errorMsg.textContent = validInput.errorMsg;
    errorMsg.classList.add("show-error-msg");
    errorMsg.classList.remove("hide-error-msg");
    noOfPagesInput.classList.add("invalid-input");
  }
});

// add a book
function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  const noOfPages = noOfPagesInput.value;
  const readStatus = isRadioBtnChecked(readStatusInputs);

  if (title && author && noOfPages && readStatus.checked) {
    readStatus.value = readStatus.value === "false" ? false : true;
    myLibrary.addBook(title, author, noOfPages, readStatus.value);
  }

  // clear form
  clearForm();

  Render.showLibrary(myLibrary.getAllBooks(), contentContainer);
}
// delete book
function deleteBook(e) {
  if (e.target.hasAttribute("data-delete")) {
    const id = e.target.attributes["data-delete"].value;
    myLibrary.deleteBook(id);
    Render.showLibrary(myLibrary.getAllBooks(), contentContainer);
  }
}

//change read status
function changeReadStatus(e) {
  if (e.target.hasAttribute("data-id")) {
    const id = e.target.attributes["data-id"].value;
    const readStatus = e.target.textContent === "Yes" ? true : false;

    myLibrary.getAllBooks()[id].readStatus = readStatus;
    Render.showLibrary(myLibrary.getAllBooks(), contentContainer);
  }
}

// is radio button checked
function isRadioBtnChecked(radioButtons) {
  let checked = false;
  let value = "";

  for (let i = 0; i < radioButtons.length; i++) {
    const radioButton = radioButtons[i];
    if (radioButton.checked) {
      value = radioButton.value;
      checked = true;
    }
  }
  return {
    checked: checked,
    value: value,
  };
}

// clear form function
function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  noOfPagesInput.value = "";

  for (let i = 0; i < readStatusInputs.length; i++) {
    const readStatusInput = readStatusInputs[i];
    readStatusInput.checked = false;
  }
}

const myLibrary = new Library();

// add function
const addBtn = document.getElementById("add");

addBtn.addEventListener("click", addBook);

// clear button
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clearForm);

// change read status
window.addEventListener("click", changeReadStatus);

// delete a book
window.addEventListener("click", deleteBook);

// show library on load
window.addEventListener("load", function () {
  Render.showLibrary(myLibrary.getAllBooks(), contentContainer);
});
