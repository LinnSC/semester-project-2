import { DETAILS_URL } from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import noID from "./utilities/noID.js";
import { SHOW_MESSAGE, ERROR_CLASS } from "./constants/misc.js";
import { renderDetails } from "./components/renderDetails.js";
import { createImageModal } from "./components/createImageModal.js";
import { cartBtnClick } from "./utilities/cartButton.js";

import createBreadcrumb from "./components/createBreadcrumb.js";
import createTitle from "./components/createTitle.js";
import rederect from "./utilities/rederect.js";

noID();

async function getDetails() {
  try {
    const response = await fetch(DETAILS_URL);
    const json = await response.json();

    createTitle(json);

    createBreadcrumb(json);

    renderDetails(json);

    createImageModal(json);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, SHOW_MESSAGE);
  }
}

getDetails().then(() => {
  cartBtnClick();
});
