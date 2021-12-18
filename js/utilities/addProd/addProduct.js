import displayMessage from "../../components/displayMessage.js";
import {
  ERROR_CLASS,
  FORM_MESSAGE,
  SUCCESS_CLASS,
} from "../../constants/misc.js";
import MESSAGES from "../../constants/messages.js";
import { PRODUCTS_URL } from "../../constants/api.js";
import { getToken } from "../storage/getLoginInfo.js";

import elements from "../../constants/elements.js";

export async function addProduct(title, price, description, image, featured) {
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(PRODUCTS_URL, options);
    const json = await response.json();

    if (json.created_at) {
      window.scrollTo(0, 0);
      displayMessage(SUCCESS_CLASS, MESSAGES.prod_created, FORM_MESSAGE);

      elements.form.reset();
    }

    if (json.error) {
      window.scrollTo(0, 0);
      displayMessage(ERROR_CLASS, MESSAGES.not_loggedin, FORM_MESSAGE);

      elements.form.reset();
    }
  } catch (error) {
    window.scrollTo(0, 0);
    displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
  }
}
