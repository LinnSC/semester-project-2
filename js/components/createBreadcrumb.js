import elements from "../constants/elements.js";

export default function createBreadcrumb(json) {
  elements.breadcrumbCurrent.innerHTML = `
      ${json.title.slice(0, 15) + "..."}`;
}
