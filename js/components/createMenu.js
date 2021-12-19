import elements from "../constants/elements.js";
import { getUsername } from "../utilities/storage/getLoginInfo.js";
import logOut from "../utilities/login/logOut.js";

import navClose from "../utilities/navClose.js";

export default function createMenu() {
  const { pathname } = document.location;

  const username = getUsername();

  let authBtn = `<a href="login.html">
                    <button type="button" class="btn btn-dark login__btn">Log in</button>
                </a>`;

  let adminLink = ``;

  if (username) {
    authBtn = `<button id="log-out" type="button" class="btn btn-dark login__btn">Log out</button>`;

    adminLink = `<a href="admin.html" class="nav-link ${
      pathname === "/admin.html" ? "active" : ""
    }">
                  Admin
                </a>`;
  }

  elements.menuContainer.innerHTML += `  <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
                                    <div class="container-fluid">

                                        <a class="navbar-brand" href="/">
                                          <img
                                          class="logo"
                                          src="images/preLoved-logo2.png"
                                          alt="Pre Loved Logo"/>
                                        </a>

                                        <div class="icons-container">

                                            <a class="cart" href="cart.html">
                                                <img
                                                class="cart-icon"
                                                src="images/kelly-icon.png"
                                                alt="shopping cart"/>
                                                <div class="cart-count">
                                                  <p>0</p>
                                                </div>
                                            </a>

                                            <button
                                            class="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                              <span class="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                              
                                              <li class="d-flex justify-content-end nav-item">
                                                <a href="/" class="nav-link ${
                                                  pathname === "/"
                                                    ? "active"
                                                    : ""
                                                }">
                                                Home
                                                </a>
                                              </li>

                                              <li class="d-flex justify-content-end nav-item">
                                                <a href="products.html" class="nav-link ${
                                                  pathname === "/products.html"
                                                    ? "active"
                                                    : ""
                                                }">
                                                Products
                                                </a>
                                               </li>


                                              <li class="d-flex justify-content-end nav-item">
                                                <a href="waitinglist.html" class="nav-link ${
                                                  pathname ===
                                                  "/waitinglist.html"
                                                    ? "active"
                                                    : ""
                                                }">
                                                Waiting list
                                                </a>
                                              </li>

                                              <li id="admin" class="d-flex justify-content-end nav-item">
                                                ${adminLink}
                                              </li>

                                              <li class="d-flex justify-content-end nav-item login">
                                                ${authBtn}
                                              </li>
                                              
                                          </ul>
                                        </div>
                                    </div>
                                    </nav>`;

  logOut();
  navClose();
}
