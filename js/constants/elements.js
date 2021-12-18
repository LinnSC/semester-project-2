import { getToken } from "../utilities/storage/getLoginInfo.js";

const footerContainer = document.querySelector("footer");
const menuContainer = document.querySelector("header");

const titleContainer = document.querySelector("title");
const breadcrumbCurrent = document.querySelector(".breadcrumb-current");

const heroContainer = document.querySelector(".hero__background");
const featuredContainer = document.querySelector(".featured__cards");
const productsContainer = document.querySelector(".row");
const search = document.querySelector(".search__input");
const detailsContainer = document.querySelector(".prod-detail");

const cartButton = document.querySelector(".cart-btn");
const prodContainer = document.querySelector(".prod");

const sumProd = document.querySelector(".prod-sum");
const sumShip = document.querySelector(".ship-sum");
const sumTotal = document.querySelector(".total__sum");

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

const title = document.querySelector("#inputTitle");
const price = document.querySelector("#inputPrice");
const description = document.querySelector("#inputDescription");
const image = document.querySelector("#inputImage");
const featured = document.querySelector("#featured");
const prodId = document.querySelector("#inputId");

const titleError = document.querySelector("#titleError");
const priceError = document.querySelector("#priceError");
const descripError = document.querySelector("#descriptionError");
const imageError = document.querySelector("#imageError");
const idError = document.querySelector("#idError");

const loader = document.querySelector(".loader");
const editForm = document.querySelector(".edit-form");
const deleteContainer = document.querySelector(".delete-container");
const reloadBtn = document.querySelector(".reload");

const elements = {
  footerContainer,
  menuContainer,
  featuredContainer,
  heroContainer,
  productsContainer,
  search,
  detailsContainer,
  queryString,
  params,
  apiId,
  titleContainer,
  cartButton,
  prodContainer,
  sumProd,
  sumShip,
  sumTotal,
  breadcrumbCurrent,
  form,
  username,
  password,
  formMessage,
  logoutBtn,
  tokenKey,
  userKey,
  title,
  price,
  description,
  image,
  featured,
  prodId,
  titleError,
  priceError,
  descripError,
  imageError,
  idError,
  loader,
  editForm,
  deleteContainer,
  reloadBtn,
};

export default elements;
