import { SUCCESS_CLASS, FORM_MESSAGE } from "./constants/misc.js";
import displayMessage from "./components/displayMessage.js";
import { checkLength, validateEmail } from "./utilities/validateForm.js";
import MESSAGES from "./constants/messages.js";
import elements from "./constants/elements.js";

function validateForm(event) {
  event.preventDefault();

  if (checkLength(elements.fullName.value, 3)) {
    elements.fullNameError.style.display = "none";
  } else {
    elements.fullNameError.style.display = "block";
  }

  if (validateEmail(elements.email.value)) {
    elements.emailError.style.display = "none";
  } else {
    elements.emailError.style.display = "block";
  }

  if (checkLength(elements.subject.value, 0)) {
    elements.subjectError.style.display = "none";
  } else {
    elements.subjectError.style.display = "block";
  }

  if (checkLength(elements.message.value, 15)) {
    elements.messageError.style.display = "none";
  } else {
    elements.messageError.style.display = "block";
  }

  if (
    checkLength(elements.fullName.value, 5) &&
    validateEmail(elements.email.value) &&
    checkLength(elements.subject.value, 0) &&
    checkLength(elements.message.value, 15)
  ) {
    window.scrollTo(0, 0);
    elements.waitingListform.reset();
    displayMessage(SUCCESS_CLASS, MESSAGES.waitingList_submit, FORM_MESSAGE);
  } else {
    elements.validationMessage.innerHTML = "";
  }
}

elements.waitingListform.addEventListener("submit", validateForm);
