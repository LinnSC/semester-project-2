const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const apiId = params.get("id");
const titleContainer = document.querySelector("title");
const cartButton = document.querySelector(".cart-btn");

const elements = {
  productsContainer,
  search,
  detailsContainer,
  queryString,
  params,
  apiId,
  titleContainer,
  cartButton,
};

export default elements;
