import { HOME_URL } from "../../constants/api.js";
import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "../../constants/misc.js";
import renderHeroImg from "../../components/renderHeroImg.js";

export async function getHeroImg() {
  try {
    const response = await fetch(HOME_URL);
    const json = await response.json();

    renderHeroImg(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);
  }
}
