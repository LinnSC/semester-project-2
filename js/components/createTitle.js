import elements from "../constants/elements.js";

export default function createTitle(json) {
  elements.titleContainer.innerHTML += ` ${json.title}`;
}
