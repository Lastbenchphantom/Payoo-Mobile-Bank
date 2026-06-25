// add money to the account

//step-1: add event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    //prevent page reload after form submission
    event.preventDefault();
    console.log("money add button clicked");
    const amount = document.getElementById("amount").value;
    const pinNumber = document.getElementById("pin").value;
  });
