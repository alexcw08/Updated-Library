const addBookBtn = document.querySelector("#addBookBtn");
const noBooksLabel = document.querySelector(".noBooksLabel");
const overlay = document.querySelector("#overlay");
const cardContainer = document.querySelector("#card-container");

const addBookForm = document.querySelector(".addBookForm");
// Selectors for elements inside of the form
const addBtn = document.querySelector("#addBtn");
const bookAuthor = document.querySelector("#bookAuthor");
const bookTitle = document.querySelector("#bookName");
const bookPages = document.querySelector("#bookPages");
const cancelBtn = document.querySelector("#cancelBtn");

// Empty book library
let bookLibrary = [];

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

// When add book button is clicked, form is set to active and an overlay darkens the background below it
addBookBtn.addEventListener("click", () => {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
});

// When cancel button is clicked, form is no longer active and overlay is disabled
cancelBtn.addEventListener("click", () => {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});

// Whenever an area on the overlay is clicked, overlay and form is disabled
overlay.addEventListener("click", () => {
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});
// A new card and its children is created with the given parameters
function createCard(title, author, pages) {
  let newCard = document.createElement("div");
  newCard.classList.add("card");
  cardContainer.append(newCard);

  let newCardImage = document.createElement("div");
  newCardImage.classList.add("card-image");
  newCard.append(newCardImage);

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
}

// When the add button is clicked, capture the values of the 3 inputs and call the create card function and pass
// values as parameters.
addBtn.addEventListener("click", () => {
  let author = bookAuthor.value;
  let title = bookTitle.value;
  let pages = bookPages.value;

  createCard(title, author, pages);

  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
});
