// Buena suerte!

// inputs
const successContainer = document.querySelector("#success-container");
const formElements = document.querySelector("#form-elements");
const cardName = document.querySelector("#holder-name");
const cardNumber = document.querySelector("#holder-card-number");
const cardMM = document.querySelector("#exp-date");
const cardYY = document.querySelector("#mm-yy");
const cardCvc = document.querySelector("#cvc");
const btnConfirm = document.querySelector("#confirm-btn");

// outputs
const cardNameDisplay = document.querySelector("#card-username");
const cardNumberDisplay = document.querySelector("#card-number");
const cardMMDisplay = document.querySelector("#card-month");
const cardYYDisplay = document.querySelector("#card-year");
const cardCvcDisplay = document.querySelector("#card-cvc");

btnConfirm.addEventListener("click", (e) => {
  e.preventDefault();
  let validate = true;
  if (cardName.value.length == 0) {
    document.querySelector("#holder-name-error").textContent = "Can't be blank";
    document.querySelector("#holder-name-error").classList.add("error-msg");
    validate = false;
  } else {
    document.querySelector("#holder-name-error").textContent = "";
    document.querySelector("#holder-name-error").classList.remove("error-msg");
  }

  if (cardNumber.value.length == 0) {
    document.querySelector("#holder-card-number-error").textContent =
      "Can't be blank";
    document
      .querySelector("#holder-card-number-error")
      .classList.add("error-msg");
    validate = false;
  } else {
    document
      .querySelector("#holder-card-number-error")
      .classList.remove("error-msg");
    document.querySelector("#holder-card-number-error").textContent = "";
  }

  if (cardMM.value.length == 0) {
    document.querySelector("#exp-date-error").textContent = "Can't be blank";
    document.querySelector("#exp-date-error").classList.add("error-msg");

    validate = false;
  } else {
    document.querySelector("#exp-date-error").classList.remove("error-msg");

    document.querySelector("#exp-date-error").textContent = "";
  }

  if (cardYY.value.length == 0) {
    document.querySelector("#mm-yy-error").textContent = "Can't be blank";
    document.querySelector("#mm-yy-error").classList.add("error-msg");
    validate = false;
  } else {
    document.querySelector("#mm-yy-error").textContent = "";
    document.querySelector("#mm-yy-error").classList.remove("error-msg");
  }

  if (cardCvc.value.length == 0) {
    document.querySelector("#cvc-error").textContent = "Can't be blank";
    document.querySelector("#cvc-error").classList.add("error-msg");

    validate = false;
  } else {
    document.querySelector("#cvc-error").textContent = "";
    document.querySelector("#cvc-error").classList.remove("error-msg");

  }

  if (validate) {
    cardNameDisplay.textContent = cardName.value;
    cardNumberDisplay.textContent = cardNumber.value;
    cardMMDisplay.textContent = cardMM.value;
    cardYYDisplay.textContent = cardYY.value;
    cardCvcDisplay.textContent = cardCvc.value;
    successContainer.style.display = "inline-block";
    formElements.style.display = "none";
  }
});
