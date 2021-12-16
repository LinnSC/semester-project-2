import elements from "../constants/elements.js";

export default function createFooter() {
  elements.footerContainer.innerHTML += `<section class="footer-section d-flex flex-column align-items-center justify-content-between">
                                <div class="some">
                                    <i class="fab fa-instagram"><a href="instagram.com"></a></i>
                                    <i class="fab fa-facebook-square"><a href="facebook.com"></a></i>
                                    <i class="fab fa-linkedin"><a href="linkedin.com"></a></i>
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
