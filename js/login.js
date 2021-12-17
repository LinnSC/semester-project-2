import elements from "./constants/elements.js";
import { ERROR_CLASS, WARNING_CLASS, FORM_MESSAGE } from "./constants/misc.js";
import { checkLength, checkAll } from "./utilities/validateForm.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import { LOGIN_URL } from "./constants/api.js";

import { saveToken, saveUser } from "./utilities/storage/saveLogin.js";

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

async function doLogin(username, password) {
  const url = LOGIN_URL;

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/";
    }

    if (json.error) {
      const invalidMessage = json.message[0].messages[0].message;
      displayMessage(WARNING_CLASS, invalidMessage, FORM_MESSAGE);
    }
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
  }
}
