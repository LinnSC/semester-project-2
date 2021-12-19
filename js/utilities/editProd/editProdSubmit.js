import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import elements from "../../constants/elements.js";
import { FORM_MESSAGE, WARNING_CLASS } from "../../constants/misc.js";

import { checkLength, checkFour, checkNumber } from "../validateForm.js";
import { updateProduct } from "./updateProduct.js";

export default function editProdSubmit(event) {
  event.preventDefault();

  elements.formMessage.innerHTML = "";

  const titleValue = elements.title.value;
  const priceValue = Number.parseFloat(elements.price.value);
  const priceString = elements.price.value.toString();
  const descriptionValue = elements.description.value;
  const imageValue = elements.image.value;
  const featuredValue = elements.featured.checked;

  if (checkLength(titleValue, 0)) {
    elements.titleError.style.display = "none";
  } else {
    elements.titleError.style.display = "block";
  }

  if (checkLength(priceString, 0)) {
    elements.priceError.style.display = "none";
  } else {
    elements.priceError.style.display = "block";
  }

  if (checkNumber(priceValue)) {
    elements.priceError.style.display = "none";
  } else {
    elements.priceError.style.display = "block";
  }

  if (checkLength(descriptionValue, 0)) {
    elements.descripError.style.display = "none";
  } else {
    elements.descripError.style.display = "block";
  }

  if (checkLength(imageValue, 0)) {
    elements.imageError.style.display = "none";
  } else {
    elements.imageError.style.display = "block";
  }

  if (
    !checkFour(titleValue, descriptionValue, imageValue, priceString, 0) ||
    !checkNumber(priceValue)
  ) {
    window.scrollTo(0, 0);
    return displayMessage(
      WARNING_CLASS,
      MESSAGES.missing_prod_info,
      FORM_MESSAGE
    );
  } else {
    updateProduct(
      titleValue,
      priceValue,
      descriptionValue,
      imageValue,
      featuredValue
    );
  }
}
