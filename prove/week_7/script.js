document.getElementById("cardNumber").addEventListener("input", function() {
  var value = this.value.replace(/\D/g, "");
  var formatted = "";

  for (var i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 == 0) {
      formatted += " ";
    }
    formatted += value[i];
  }

  this.value = formatted;
});

document.getElementById("expMonth").addEventListener("input", function() {
  if (this.value.length == 2) {
    document.getElementById("expYear").focus();
  }
});

function validateForm() {
  var cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
  var cardHolder = document.getElementById("cardHolder").value;
  var expMonth = document.getElementById("expMonth").value;
  var expYear = document.getElementById("expYear").value;
  var cvv = document.getElementById("cvv").value;
  var feedback = document.getElementById("feedback");

  if (cardNumber != "1234123412341234") {
    feedback.style.color = "red";
    feedback.textContent = "Error: Card number is invalid.";
    return;
  }

  if (cardHolder == "") {
    feedback.style.color = "red";
    feedback.textContent = "Error: Please enter the card holder name.";
    return;
  }

  if (expMonth == "" || expYear == "") {
    feedback.style.color = "red";
    feedback.textContent = "Error: Please enter the expiration date.";
    return;
  }

  var today = new Date();
  var currentYear = today.getFullYear() % 100;
  var currentMonth = today.getMonth() + 1;

  if (parseInt(expYear) < currentYear) {
    feedback.style.color = "red";
    feedback.textContent = "Error: This card is expired.";
    return;
  }

  if (parseInt(expYear) == currentYear && parseInt(expMonth) < currentMonth) {
    feedback.style.color = "red";
    feedback.textContent = "Error: This card is expired.";
    return;
  }

  if (cvv.length < 3 || cvv.length > 4) {
    feedback.style.color = "red";
    feedback.textContent = "Error: CVV must be 3 or 4 digits.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Payment successful! Thank you, " + cardHolder + "!";
}
