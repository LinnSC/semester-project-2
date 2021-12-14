const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const elements = {
  productsContainer,
  search,
  detailsContainer,
  queryString,
  params,
  id,
};

export default elements;
