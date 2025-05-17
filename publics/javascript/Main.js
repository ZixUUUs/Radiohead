const callAddBtn = document.querySelector(".addBtn");
const formDiv = document.querySelector(".add-album-form");
const closeForm = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
function displayForm() {
  let displayFelx = "display: flex;";
  formDiv.style = displayFelx;
  overlay.style = displayFelx;
  return;
}
function closeDiv() {
  let displayNone = "display: none;";
  formDiv.style = displayNone;
  overlay.style = displayNone;
  return;
}

callAddBtn.addEventListener("click", displayForm);
closeForm.addEventListener("click", closeDiv);
