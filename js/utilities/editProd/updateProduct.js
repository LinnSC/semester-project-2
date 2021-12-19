import { DETAILS_URL } from "../../constants/api.js";
import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import {
  ERROR_CLASS,
  FORM_MESSAGE,
  SUCCESS_CLASS,
} from "../../constants/misc.js";

import { getToken } from "../storage/getLoginInfo.js";

export async function updateProduct(
  title,
  price,
  description,
  image,
  featured,
  id
) {
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(DETAILS_URL, options);
    const json = await response.json();

    if (json.created_at) {
      window.scrollTo(0, 0);
      displayMessage(SUCCESS_CLASS, MESSAGES.prod_updated, FORM_MESSAGE);
    }

    if (json.error) {
      const invalidMessage = json.message[0].messages[0].message;
      window.scrollTo(0, 0);
      displayMessage(ERROR_CLASS, invalidMessage, FORM_MESSAGE);
    }
  } catch (error) {
    window.scrollTo(0, 0);
    displayMessage(ERROR_CLASS, MESSAGES.error_message, FORM_MESSAGE);
  }
}
