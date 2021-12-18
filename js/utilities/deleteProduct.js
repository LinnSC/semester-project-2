import { DETAILS_URL } from "../constants/api.js";
import displayMessage from "../components/displayMessage.js";
import MESSAGES from "../constants/messages.js";
import elements from "../constants/elements.js";
import { ERROR_CLASS, FORM_MESSAGE } from "../constants/misc.js";
import { getToken } from "./storage/getLoginInfo.js";

export default function deleteButton(id) {
  elements.deleteContainer.innerHTML = `<button class="delete-btn btn btn-sm btn-danger">
                                  Delete this product
                                  </button>`;

  const deleteBtn = document.querySelector(".delete-btn");

  deleteBtn.onclick = async function () {
    const confirmDelete = confirm(MESSAGES.confirm_delete);

    if (confirmDelete) {
      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(DETAILS_URL, options);
        const json = await response.json();

        console.log(json);

        if (json.created_at) {
          location.href = "admin.html";
        }

        if (json.error) {
          window.scrollTo(0, 0);
          displayMessage(ERROR_CLASS, MESSAGES.not_loggedin, FORM_MESSAGE);
        }
      } catch (error) {
        window.scrollTo(0, 0);
        displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
      }
    }
  };
}
