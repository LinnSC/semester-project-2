import elements from "../constants/elements.js";

export default function renderHeroImg(json) {
  elements.heroContainer.style.backgroundImage = `url(${json.Hero_banner[0].url})`;

  elements.heroContainer.innerHTML += `<h1>Welcome to Pre Loved</h1>
                                        <p>
                                            We are selling pre loved luxury handbags, shoes, jewelries and
                                            watches. Take a look and see if we have the pre loved treasure you
                                            have been looking for!
                                        </p>
                                        <a href="products.html">
                                            <button type="button" class="hero-btn btn btn-primary btn-lg">
                                            Shop now
                                            </button>
                                        </a>`;
}
