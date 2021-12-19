import { SUCCESS_CLASS, FORM_MESSAGE } from "./constants/misc.js";
import displayMessage from "./components/displayMessage.js";

import { checkLength, validateEmail } from "./utilities/validateForm.js";

import MESSAGES from "./constants/messages.js";

import elements from "./constants/elements.js";

// const waitingListform = document.querySelector(".waiting-list__form");
// const fullName = document.querySelector("#inputName");
// const fullNameError = document.querySelector("#nameError");
// const email = document.querySelector("#inputEmail");
// const emailError = document.querySelector("#emailError");
// const subject = document.querySelector("#inputSubject");
// const subjectError = document.querySelector("#subjectError");
// const message = document.querySelector("#inputMessage");
// const messageError = document.querySelector("#messageError");
// const validationMessage = document.querySelector(".form-message");

const nameValue = elements.fullName.value;
const emailValue = elements.email.value;
const subjectValue = elements.subject.value;
const messageValue = elements.message.value;

function validateForm(event) {
  event.preventDefault();

  if (checkLength(nameValue, 3)) {
    elements.fullNameError.style.display = "none";
  } else {
    elements.fullNameError.style.display = "block";
  }

  if (validateEmail(emailValue)) {
    elements.emailError.style.display = "none";
  } else {
    elements.emailError.style.display = "block";
  }

  if (checkLength(subjectValue, 0)) {
    elements.subjectError.style.display = "none";
  } else {
    elements.subjectError.style.display = "block";
  }

  if (checkLength(messageValue, 15)) {
    elements.messageError.style.display = "none";
  } else {
    elements.messageError.style.display = "block";
  }

  if (
    checkLength(nameValue, 3) &&
    validateEmail(emailValue) &&
    checkLength(subjectValue, 0) &&
    checkLength(messageValue, 15)
  ) {
    window.scrollTo(0, 0);
    elements.waitingListform.reset();
    return displayMessage(
      SUCCESS_CLASS,
      MESSAGES.waitingList_submit,
      FORM_MESSAGE
    );
  } else {
    elements.validationMessage.innerHTML = "";
  }
}

elements.waitingListform.addEventListener("submit", validateForm);
