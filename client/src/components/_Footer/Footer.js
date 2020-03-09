import React from "react";
import "../../assets/footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="ftco-footer ftco-bg-black ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="logo">
                <Link
                  className="navbar-brand text-light font-weight-bolder"
                  to="/"
                >
                  Gallivanter's <i>Tale</i>
                </Link>
              </h2>
              <p>
                Don’t bend; don’t water it down; don’t try to make it logical;
                don’t edit your own soul according to the fashion. Rather,
                follow your most intense obsessions mercilessly.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <a href='https://twitter.com/'><img
                    src="https://img.icons8.com/nolan/40/twitter.png"
                    alt="twitter"
                  /></a>
                </li>
                <li>
                <a href='https://www.facebook.com/'><img
                    src="https://img.icons8.com/nolan/40/facebook-new.png"
                    alt="facebook"
                  /></a>
                </li>
                <li>
                <a href='https://www.instagram.com/'><img
                    src="https://img.icons8.com/nolan/40/instagram-new.png"
                    alt="instagram"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li>
                  <Link className="py-1 d-block text-light" to="/">
                    <ion-icon name="chevron-forward-outline"></ion-icon> Home
                  </Link>
                </li>
                <li>
                  <Link className="py-1 d-block text-light" to="/team">
                    <ion-icon name="chevron-forward-outline"></ion-icon> Team
                  </Link>
                </li>
                <li>
                  <Link className="py-1 d-block text-light" to="/blogs">
                    <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="py-1 d-block text-light" to="/contact">
                    <ion-icon name="chevron-forward-outline"></ion-icon> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Question?</h2>
              <div className="block-foot mb-3">
                <ul>
                  <li>
                    <span className="icon">
                      <ion-icon name="location-outline"></ion-icon>
                    </span>
                    <span className="text-secondary">
                      198 West 21th Street, Suite 721 New York NY 10016, USA
                    </span>
                  </li>
                  <li>
                    <span className="icon">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>
                    <span className="text-light">+ 9199 8855 98</span>
                  </li>
                  <li>
                    <span className="icon">
                      <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <span className="text-secondary">
                      <a href="/cdn-cgi/l/email-protection#3b52555d547b42544e4948524f5e15585456">
                        <span
                          className="text-light"
                          data-cfemail="84edeae2ebc4fdebf1f6f7edf0e1aae7ebe9"
                        >
                          gallivanters@gmail.com
                        </span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-md"></div> */}
        </div>
        <div className="row">
          <div className="col-md-12 text-center text-secondary">
            <p>Copyright &copy; All rights reserved | Gallivanter's Tale</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
