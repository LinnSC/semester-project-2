import { DETAILS_URL } from "./constants/api.js";
import displayMessage from "./components/displayMessage.js";
import MESSAGES from "./constants/messages.js";
import elements from "./constants/elements.js";
import noID from "./utilities/noID.js";
import { ERROR_CLASS, FORM_MESSAGE } from "./constants/misc.js";
import createBreadcrumb from "./components/createBreadcrumb.js";
import createTitle from "./components/createTitle.js";
import populateEditForm from "./components/populateEditForm.js";
import editProdSubmit from "./utilities/editProd/editProdSubmit.js";
import deleteButton from "./utilities/deleteProduct.js";

noID();
rederect();

(async function getDetails() {
  try {
    const response = await fetch(DETAILS_URL);
    const json = await response.json();

    createTitle(json);

    createBreadcrumb(json);

    populateEditForm(json);

    deleteButton(json.id);
  } catch (error) {
    displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
  } finally {
    elements.loader.style.display = "none";
    elements.editForm.style.display = "block";
  }
})();

elements.editForm.addEventListener("submit", editProdSubmit);
