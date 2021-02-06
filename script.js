var modalUI;
var stayBtnUI;
var leaveBtnUI;

function showModal() {
  modalUI.style.display = "block";
}

function closeModal() {
  modalUI.style.display = "none";
}

function leaveSite() {
  window.location.href = "https://github.com/";
}

const Init = (function () {
  modalUI = document.getElementById("modal");
  stayBtnUI = document.getElementById("stay");
  leaveBtnUI = document.getElementById("leave");

  stayBtnUI.addEventListener("click", closeModal);
  leaveBtnUI.addEventListener("click", leaveSite);
  setTimeout(showModal, 300000);
})();
