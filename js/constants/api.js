import elements from "../constants/elements.js";

export const BASE_URL = "https://linn-sp2.herokuapp.com/";

export const PRODUCTS_URL = BASE_URL + "products";

export const DETAILS_URL = PRODUCTS_URL + "/" + elements.apiId;

export const FEATURED_URL = PRODUCTS_URL + "?featured_eq=true";

export const LOGIN_URL = BASE_URL + "auth/local";

export const HOME_URL = BASE_URL + "home";
