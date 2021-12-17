import { saveToken, saveUser } from "./storage/saveLoginInfo.js";

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
