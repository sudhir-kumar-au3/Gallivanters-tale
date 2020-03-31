import React, {useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
function NavBar() {
  let [pos, setPos] = useState(window.pageYOffset);
  let [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset;
      setVisible(pos > temp);
      setPos(temp)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })
  return (
    <React.Fragment>
      <nav className={"navbar navbar-default ftco-navbar-light navbar-expand-lg navbar-dark bg-light " + (!visible ? "navbarHidden":" ")}>
        <div className="container">
          <Link className="navbar-brand text-white font-weight-bolder" to="/">
            Gallivanter's <i>Tale</i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-white"
                  exact to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-white"
                  to="/blogs"
                >
                  Articles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-white"
                  to="/team"
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  activeClassName="active"
                  className="nav-link text-white"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
