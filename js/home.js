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

    if (pinNumber === "1234") {
      console.log("added money to your account");

      // get the current balance and amount as numbers
      const balance = document.getElementById("balance").innerText;
      const addAmount = amount;
      //converting to numbers
      balanceNumber = parseFloat(balance);
      addAmountNumber = parseFloat(addAmount);
      // add amount
      const newBalance = balanceNumber + addAmountNumber;
      // update UI
      document.getElementById("balance").innerText = newBalance;
      alert(newBalance);
    } else {
      alert("wrong credentials");
    }
  });

document
  .getElementById("btn-withdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("withdraw-amount").value;
    const withdrawPin = document.getElementById("withdraw-pin").value;
    const balance = document.getElementById("balance").innerText;
    const balanceNumber = parseFloat(balance);
    const withdrawAmount = parseFloat(amount);

    if (withdrawPin === "1234") {
      const newBalance = balanceNumber - withdrawAmount;

      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("wrong credentials");
    }
  });
