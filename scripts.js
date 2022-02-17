const addBookBtn = document.querySelector("#addBookBtn");
const noBooks = document.querySelector("#noBooks");
const booksContainer = document.querySelector("#booksContainer");
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
const imageAddress = document.querySelector("#imageAddress");

// Empty book library
let bookLibrary = [];

if (localStorage.getItem("bookLibrary") === null) {
  localStorage.setItem("bookLibrary", JSON.stringify([]));
  console.log("null returned");
} else {
  loadBooks();
  console.log("load function ran");
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
      image: imageAddress.value,
      read: false,
    };
    if (readBook.checked) {
      book.read = true;
    }
    addToStorage(book);
    createCard(book.title, book.author, book.pages, book.read, book.image);
    bookLibrary.push(book);
    checkLib();
    closeForm();
  } else {
    console.log("INVALID");
    console.log(
      bookTitle.checkValidity(),
      bookAuthor.checkValidity(),
      bookPages.checkValidity()
    );
  }
  addBookForm.reset();
}
function addToStorage(obj) {
  let lib = JSON.parse(localStorage.getItem("bookLibrary"));
  lib.push(obj);
  localStorage.setItem("bookLibrary", JSON.stringify(lib));
}
function loadBooks() {
  // getting local storage bookLibrary and parsing it into an array
  let lib = JSON.parse(localStorage.getItem("bookLibrary"));
  for (let i = 0; i < lib.length; i++) {
    createCard(
      lib[i].title,
      lib[i].author,
      lib[i].pages,
      lib[i].read,
      lib[i].image
    );
    console.log("address: ", lib[i].address);
  }
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
function createCard(title, author, pages, read, address) {
  let newBook = document.createElement("div");
  newBook.classList.add("book");
  booksContainer.append(newBook);

  let newCover = document.createElement("img");
  newCover.src = address;
  newBook.append(newCover);

  let newTitle = document.createElement("h3");
  newTitle.innerHTML = title;
  newBook.append(newTitle);

  let newAuthor = document.createElement("h4");
  newAuthor.innerHTML = author;
  newBook.append(newAuthor);
}

/* When the add button is clicked, capture the values of the 3 inputs and call the create card function and pass
 values as parameters. */
addBtn.addEventListener("click", () => {
  addToLibrary();
});
