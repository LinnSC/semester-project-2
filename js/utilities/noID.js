import elements from "../constants/elements.js";

export default function noID() {
  if (elements.id === null) {
    location.href = "/";
  }
}
