//// Prior Exercise: BUTTON AND EXIT-X ////

//var button = document.querySelector(".got-this");
//var modal = document.querySelector(".modal");
//var modalX = document.querySelector(".modal-x");

//button.addEventListener("click", function () {
//modal.classList.add("show-modal");
//button.innerText = "You've got this!!!";
//});

//modalX.addEventListener("click", function () {
//modal.classList.remove("show-modal");
//button.innerText = "Who's got this?";
//});

//// FUNCTION POWERED MODAL ////

var button = document.querySelector(".got-this");
var modal = document.querySelector(".modal");
var modalX = document.querySelector(".modal-x");

var closeModal = function () {
  modal.classList.remove("show-modal");
  button.innerText = "Who's got this?";
};

var openModal = function () {
  modal.classList.add("show-modal");
  button.innerText = "You've got this!!!";
};

button.addEventListener("click", function () {
  openModal();
});


modalX.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (modal.classList.contains("show-modal")) {
      closeModal();
    }
    //else if not part of exercise, messed around and figure out "on/off" buttons    
  } else if (e.key === "Enter") {
    if (modal.classList !== "show-modal") { //works with [modal.classList.not(contains("")) for all but first time]
      openModal();
    }
  }
});