import { saveToken, saveUser } from "../storage/saveLoginInfo.js";

import { WARNING_CLASS, FORM_MESSAGE } from "../../constants/misc.js";

import displayMessage from "../../components/displayMessage.js";

export default function validateLogin(json) {
  if (json.user) {
    saveToken(json.jwt);
    saveUser(json.user);

    location.href = "/";
  }

  if (json.error) {
    const invalidMessage = json.message[0].messages[0].message;

    displayMessage(WARNING_CLASS, invalidMessage, FORM_MESSAGE);
  }
}
