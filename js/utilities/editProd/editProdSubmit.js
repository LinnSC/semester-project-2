import displayMessage from "../../components/displayMessage.js";
import MESSAGES from "../../constants/messages.js";
import elements from "../../constants/elements.js";
import { FORM_MESSAGE, WARNING_CLASS } from "../../constants/misc.js";

import { checkLength, checkFive } from "../validateForm.js";
import { updateProduct } from "./updateProduct.js";

export default function editProdSubmit(event) {
  event.preventDefault();

  elements.formMessage.innerHTML = "";

  const titleValue = elements.title.value;
  const priceValue = elements.price.value;
  const descriptionValue = elements.description.value;
  const imageValue = elements.image.value;
  const featuredValue = elements.featured.checked;
  const idValue = elements.prodId.value;

  if (checkLength(titleValue, 0)) {
    elements.titleError.style.display = "none";
  } else {
    elements.titleError.style.display = "block";
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

  if (checkLength(priceValue, 0)) {
    elements.priceError.style.display = "none";
  } else {
    elements.priceError.style.display = "block";
  }

  if (checkLength(idValue, 0)) {
    elements.idError.style.display = "none";
  } else {
    elements.idError.style.display = "block";
  }

  if (
    !checkFive(titleValue, descriptionValue, imageValue, priceValue, idValue, 0)
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
      featuredValue,
      idValue
    );
  }
}