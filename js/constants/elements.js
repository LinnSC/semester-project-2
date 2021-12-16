const footerContainer = document.querySelector("footer");
const menuContainer = document.querySelector("header");
const titleContainer = document.querySelector("title");
const breadcrumbCurrent = document.querySelector(".breadcrumb-current");

const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");

const cartButton = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".prod");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const apiId = params.get("id");

const elements = {
  footerContainer,
  menuContainer,
  productsContainer,
  search,
  detailsContainer,
  queryString,
  params,
  apiId,
  titleContainer,
  cartButton,
  cartContainer,
  breadcrumbCurrent,
};

export default elements;
