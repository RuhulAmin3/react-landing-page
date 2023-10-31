import NavItem from "./ui/NavItem";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/images/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Button from "./ui/Button";

import { navbarContent } from "../constant";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  window.onscroll = () => {
    const navbar = document.getElementById("header");
    if (window.scrollY > 50) {
      // add class
      navbar?.classList.add("sticky");
    } else {
      // remove class
      navbar?.classList.remove("sticky");
    }
  };
  return (
    <header className="container-full header" id="header">
      <nav className="container">
        <div className="navbar">
          <Link to="#home">
            <div className="navbar__logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <ul
            className={`navbar__navbar-list ${
              open ? "navbar__mobile-nav" : ""
            }`}
          >
            {navbarContent.map((content, idx) => (
              <NavItem key={idx} link={content.link} text={content.text} />
            ))}
          </ul>
          <div className="navbar__search-tab">
            <span className="navbar__search-icon">
              <BiSearchAlt2 />
            </span>
            <Button className="navbar__quote-btn">Get a Quote</Button>
          </div>
          <span className="navbar__hambarger" onClick={() => setOpen(!open)}>
            {open ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
