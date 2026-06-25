//step - 1 set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //step 2: prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log("login button clicked");
    //step 3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber);
    console.log(pinNumber);
    //this is temporary
    if (phoneNumber === "5" && pinNumber === "1234") {
      alert("you are loged in");
      //step-5: allow user to use the website
    } else {
      alert("Wrond credentials");
    }
  });
