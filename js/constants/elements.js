const footerContainer = document.querySelector("footer");
const menuContainer = document.querySelector("header");
const titleContainer = document.querySelector("title");
const breadcrumbCurrent = document.querySelector(".breadcrumb-current");

const featuredContainer = document.querySelector(".featured__cards");
const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");

const cartButton = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".prod");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const apiId = params.get("id");

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const formMessage = document.querySelector(".form-message");

const tokenKey = "token";
const userKey = "user";
const logoutBtn = document.querySelector("#log-out");

const elements = {
  footerContainer,
  menuContainer,
  featuredContainer,
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
  form,
  username,
  password,
  formMessage,
  logoutBtn,
  tokenKey,
  userKey,
};

export default elements;
