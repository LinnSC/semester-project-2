import elements from "./constants/elements.js";
import { WARNING_CLASS, FORM_MESSAGE } from "./constants/misc.js";
import { checkLength, checkAll } from "./utilities/validateForm.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { doLogin } from "./utilities/doLogin.js";

elements.form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  elements.formMessage.innerHTML = "";

  const usernameValue = elements.username.value;
  const passwordValue = elements.password.value;

  if (!checkAll(passwordValue, usernameValue, 0)) {
    return displayMessage(
      WARNING_CLASS,
      MESSAGES.no_user_password,
      FORM_MESSAGE
    );
  }

  if (!checkLength(usernameValue, 0)) {
    return displayMessage(WARNING_CLASS, MESSAGES.no_username, FORM_MESSAGE);
  }

  if (!checkLength(passwordValue, 0)) {
    return displayMessage(WARNING_CLASS, MESSAGES.no_password, FORM_MESSAGE);
  }

  doLogin(usernameValue, passwordValue);
}
