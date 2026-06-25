//show the cash out form

document.getElementById("cashout-btn").addEventListener("click", function () {
  //cash out button clicked
  document.getElementById("cashout-form").classList.remove("hidden");
  document.getElementById("addmoney-form").classList.add("hidden");
});

document.getElementById("addmoney-btn").addEventListener("click", function () {
  document.getElementById("cashout-form").classList.add("hidden");
  document.getElementById("addmoney-form").classList.remove("hidden");
});
