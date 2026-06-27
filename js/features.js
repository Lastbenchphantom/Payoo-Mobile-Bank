const addMoneyBtn = document.getElementById("addmoney-btn");
const cashOutBtn = document.getElementById("cashout-btn");
const addMoneyForm = document.getElementById("addmoney-form");
const cashOutForm = document.getElementById("cashout-form");

cashOutBtn.addEventListener("click", function () {
  cashOutForm.classList.remove("hidden");
  addMoneyForm.classList.add("hidden");

  // Dynamic button visual states
  cashOutBtn.classList.add("btn-active");
  addMoneyBtn.classList.remove("btn-active");
});

addMoneyBtn.addEventListener("click", function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");

  addMoneyBtn.classList.add("btn-active");
  cashOutBtn.classList.remove("btn-active");
});
