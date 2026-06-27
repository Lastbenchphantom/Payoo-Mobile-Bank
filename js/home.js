// --- ADD MONEY LOGIC ---
document
  .getElementById("form-add-money")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const addMoneyAmount = getInputNumberById("amount");
    const pinNumber = getInputValueById("pin");

    // Basic verification fallback
    if (pinNumber === "1234") {
      if (addMoneyAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      const currentBalance = TextElementValueById("balance");
      const newBalance = currentBalance + addMoneyAmount;

      document.getElementById("balance").innerText = newBalance;
      alert(`Successfully added ${addMoneyAmount} BDT!`);

      // Clear Form inputs safely
      event.target.reset();
    } else {
      alert("Invalid PIN. Please try again.");
    }
  });

// --- CASH OUT LOGIC ---
document
  .getElementById("form-withdraw")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cashOutAmount = getInputNumberById("withdraw-amount");
    const pinNumber = getInputValueById("withdraw-pin");
    const currentBalance = TextElementValueById("balance");

    if (pinNumber === "1234") {
      if (cashOutAmount <= 0) {
        alert("Please enter a valid transactional amount.");
        return;
      }
      if (cashOutAmount > currentBalance) {
        alert("Insufficient funds for withdrawal.");
        return;
      }

      const newBalance = currentBalance - cashOutAmount;
      document.getElementById("balance").innerText = newBalance;
      alert(`Successfully cashed out ${cashOutAmount} BDT!`);

      event.target.reset();
    } else {
      alert("Invalid PIN. Please try again.");
    }
  });
