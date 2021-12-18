import elements from "../constants/elements.js";

export default function populateEditForm(json) {
  elements.title.value = json.title;
  elements.price.value = json.price;
  elements.description.value = json.description;
  elements.image.value = json.image_url;
  elements.featured.checked = json.featured;
  elements.prodId.value = json.id;
}
