const addBookBtn = document.querySelector("#addBookBtn");
const noBooksLabel = document.querySelector(".noBooksLabel");
const addBookForm = document.querySelector(".addBookForm");

addBookBtn.addEventListener("click", () => {
  noBooksLabel.remove();
  addBookForm.style.display = "grid";
  addBookBtn.remove();
});
