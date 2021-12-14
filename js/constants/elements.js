const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const titleContainer = document.querySelector("title");
const cartButton = document.querySelector(".cart-btn");

const elements = {
  productsContainer,
  search,
  detailsContainer,
  queryString,
  params,
  id,
  titleContainer,
  cartButton,
};

export default elements;
