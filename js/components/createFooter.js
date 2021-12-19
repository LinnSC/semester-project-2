import elements from "../constants/elements.js";

export default function createFooter() {
  elements.footerContainer.innerHTML += `<section class="footer-section d-flex flex-column align-items-center justify-content-between">
                                <div class="some">
                                <a href="instagram.com"><i class="fab fa-instagram"></i></a>
                                <a href="facebook.com"><i class="fab fa-facebook-square"></i></a>
                                <a href="linkedin.com"> <i class="fab fa-linkedin"></i></a>
                                </div>
                                <div class="d-flex flex-column justify-content-evenly align-items-center">
                                    <h4>Contact</h4>
                                    <p>preloved@mail.com</p>
                                    <p>+47 12345678</p>
                                    <p>Some road 100, 5001 Bergen</p>
                                </div>
                                <div
                                class="copy d-flex flex-column justify-content-center align-items-center">
                                    <p><i class="far fa-copyright"></i> Pre Loved 2021</p>
                                    <p>| Designed and developed by Linn Corneliussen |</p>
                                </div>  
                            </section>`;
}

{
}
