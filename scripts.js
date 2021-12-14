const addBookBtn = document.querySelector("#addBookBtn");
const noBooksLabel = document.querySelector(".noBooksLabel");
const addBookForm = document.querySelector(".addBookForm");

// Empty book library
let bookLibrary = ["no"];

// Book constructor that takes parameters and sets their values
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Add new book created with constructor to the book library
function addToLibrary(newBook) {
  bookLibrary.push(newBook);
}

// Function checking if bookLibrary is empty
function emptyLibrary() {
  if (bookLibrary.length === 0) {
    return true;
  } else {
    return false;
  }
}

addBookBtn.addEventListener("click", () => {
  addBookForm.style.display = "flex";
  addBookBtn.remove();
});
