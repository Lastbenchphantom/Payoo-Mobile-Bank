document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const phoneNumber = getInputValueById("phone-number");
  const pinNumber = getInputValueById("pin-number");

  // Temporary credentials verification
  if (phoneNumber === "5" && pinNumber === "1234") {
    alert("Login successful!");
    // Relative paths fix depending on server setups
    window.location.href = "home.html";
  } else {
    alert("Wrong credentials! Use Phone: 5 & PIN: 1234");
  }
});
