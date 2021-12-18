import { ERROR_CLASS, FORM_MESSAGE } from "../../constants/misc.js";
import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import { LOGIN_URL } from "../../constants/api.js";

import validateLogin from "./validateLogin.js";

export async function doLogin(username, password) {
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(LOGIN_URL, options);
    const json = await response.json();

    console.log(json);

    validateLogin(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
  }
}
