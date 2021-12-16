import elements from "../constants/elements.js";

export default function noID() {
  if (elements.apiId === null) {
    location.href = "/";
  }
}
