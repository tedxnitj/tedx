import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/email.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <div class="foot">
      {/* <div class="container footer_cont"> */}
      <footer>
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>License Holder</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sanchita Kapur</a></li>
              
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanchitakapur/"><img src={navIcon1} alt="" /></a>
                <a href='mailto:sanchitak.ic.20@nitj.ac.in'><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/sancheeetos?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="" /></a>
              </div>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Important Links</h5>
            <ul class="nav flex-column">
              <li className="nav-item mb-2 foot__link"><a href="https://www.ted.com/" class="nav-link p-0 text-muted ">TED</a></li>
              <li className="nav-item mb-2 foot__link"><a href="https://www.ted.com/about/programs-initiatives/tedx-program" class="nav-link p-0 text-muted ">TEDx</a></li>
              <li className="nav-item mb-2 foot__link"><a href="/getinvolve" class="nav-link p-0 text-muted ">Get Involved</a></li>

            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Contact Us</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">You can mail us at tedxnitj@nitj.ac.in</a></li>
              <div className="social-icon">
                <a href="https://in.linkedin.com/company/tedxnitjalandhar?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src={navIcon1} alt="" /></a>
                <a href="mailto:tedxnitj@nitj.ac.in"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/tedxnitjalandhar/"><img src={navIcon3} alt="" /></a>
              </div>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>

              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <div className="footer_Map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.8015214705724!2d75.53475060055196!3d31.395668269175257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e1!3m2!1sen!2sin!4v1674650389321!5m2!1sen!2sin" width="320" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div class="d-flex flex-column flex-sm-row justify-content-between py-4  border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p> */}
        {/* <ul class="list-unstyled d-flex"> */}
        {/* <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
        {/* </ul> */}
        {/* </div> */}
      </footer>
    </div>
    // </div>
  )
}
