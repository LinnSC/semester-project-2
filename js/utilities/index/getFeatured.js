import { FEATURED_URL } from "../../constants/api.js";
import { renderFeatured } from "../../components/renderFeatured.js";
import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "../../constants/misc.js";

export async function getFeatured() {
  try {
    const response = await fetch(FEATURED_URL);
    const json = await response.json();

    renderFeatured(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);
  }
}
