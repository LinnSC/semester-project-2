export default function createMenu() {
  const menuContainer = document.querySelector("header");

  const { pathname } = document.location;

  menuContainer.innerHTML += ``;
}

{
  /* <div>
                                  <a class="logo" href="/">Articles</a>
                              </div>
                              <nav class="nav-bar">
                                  <div class="hamburger-menu">
                                      <div class="line line-1"></div>
                                      <div class="line line-2"></div>
                                      <div class="line line-3"></div>
                                  </div>
  
                                  <ul class="nav">
                                      <li>
                                      <a href="/" class="${
                                        pathname === "/" ? "active" : ""
                                      }">Home</a>
                                      </li>
                                      <li>
                                      <a href="favourites.html" class="${
                                        pathname === "/favourites.html"
                                          ? "active"
                                          : ""
                                      }">Favourites</a>
                                      </li>
                                  </ul>
                              </nav> */
}
