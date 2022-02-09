const addBookBtn = document.querySelector("#addBookBtn");
const noBooks = document.querySelector("#noBooks");
const cardContainer = document.querySelector("#card-container");
const bodyCont = document.querySelector("#bodyContainer");

const overlay = document.querySelector("#overlay");
const addBookForm = document.querySelector(".addBookForm");

// Selectors for elements inside of the form
const addBtn = document.querySelector("#addBtn");
const bookAuthor = document.querySelector("#bookAuthor");
const bookTitle = document.querySelector("#bookName");
const bookPages = document.querySelector("#bookPages");
const cancelBtn = document.querySelector("#cancelBtn");
const readBook = document.querySelector("#readBook");

// Empty book library
let bookLibrary = [];

function pageStart() {
  if (bookLibrary.length === 0) {
    addNoBooks();
  }
}

// Add new book created with constructor to the book library
function addToLibrary(newBook) {
  // If the form values are not empty, create a book with those values and close the form
  if (
    bookTitle.checkValidity() &&
    bookAuthor.checkValidity() &&
    bookPages.checkValidity()
  ) {
    let book = {
      title: bookTitle.value,
      author: bookAuthor.value,
      pages: bookPages.value,
      read: false,
    };
    if (readBook.checked) {
      book.read = true;
    }
    createCard(book.title, book.author, book.pages, book.read);

    bookLibrary.push(book);
    console.log(bookLibrary);
    checkLib();
    closeForm();
  } else {
    console.log("INVALID");
  }
  addBookForm.reset();
}

function openForm() {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
}
function closeForm() {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
  addBookForm.reset();
}
function addNoBooks() {
  noBooks.classList.add("noBooks");
  noBooks.classList.add("active");
  noBooks.innerHTML = "You have no books in your library.";
}

function checkLib() {
  if (bookLibrary.length === 1) {
    noBooks.classList.remove("active");
  } else if (bookLibrary === 0) {
    noBooks.classList.add("noBooks");
    noBooks.classList.add("active");
    noBooks.innerHTML = "You have no books in your library.";
  }
}
// Function checking if bookLibrary is empty
function emptyLibrary() {
  if (bookLibrary.length === 0) {
    return true;
  } else {
    return false;
  }
}

// When add book button is clicked, open form
addBookBtn.addEventListener("click", () => {
  openForm();
});

// When cancel button is clicked, close form
cancelBtn.addEventListener("click", () => {
  closeForm();
});

// Whenever an area on the overlay is clicked, close form
overlay.addEventListener("click", () => {
  closeForm();
});
// A new card and its children is created with the given parameters
function createCard(title, author, pages, read) {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  cardContainer.append(newCard);

  let newCardTitle = document.createElement("h2");
  newCardTitle.classList.add("cardTitle");
  newCardTitle.innerHTML = title;
  newCard.append(newCardTitle);

  let newCardAuthor = document.createElement("h3");
  newCardAuthor.classList.add("cardAuthor");
  newCardAuthor.innerHTML = author;
  newCard.append(newCardAuthor);

  let newCardPages = document.createElement("h4");
  newCardPages.classList.add("cardPages");
  newCardPages.innerHTML = pages;
  newCard.append(newCardPages);

  if (read === false) {
    let notRead = document.createElement("div");
    notRead.classList.add("cardBase");
    notRead.innerHTML = "Not read";
    newCard.append(notRead);
  }
}

/* When the add button is clicked, capture the values of the 3 inputs and call the create card function and pass
 values as parameters. */
addBtn.addEventListener("click", () => {
  // createCard(bookTitle.value, bookAuthor.value, bookPages.value);
  addToLibrary();
});
