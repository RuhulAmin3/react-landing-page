import NavItem from "./ui/NavItem";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/images/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Button from "./ui/Button";

import { navbarContent } from "../constant";
import { useState } from "react";
import styles from "../styles/_navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  window.onscroll = () => {
    const navbar = document.getElementById(styles["header"]);
    if (window.scrollY > 50) {
      // add class
      navbar?.classList.add(styles["sticky"]);
    } else {
      // remove class
      navbar?.classList.remove(styles["sticky"]);
    }
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <header
      className={`${styles["container-full"]} ${styles["header"]}`}
      id="header"
    >
      <nav className={`${styles["container"]}`}>
        <div className={`${styles["navbar"]}`}>
          <Link to="#home">
            <div className={`${styles["navbar__logo"]}`}>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <ul
            className={`${styles["navbar__navbar-list"]} ${
              open ? `${styles["navbar__mobile-nav"]}` : ""
            }`}
          >
            {navbarContent.map((content, idx) => (
              <NavItem
                handleToggle={handleToggle}
                key={idx}
                link={content.link}
                text={content.text}
              />
            ))}
          </ul>
          <div className={`${styles["navbar__search-tab"]}`}>
            <span className={`${styles["navbar__search-icon"]}`}>
              <BiSearchAlt2 />
            </span>
            <Button className={`${styles["navbar__quote-btn"]}`}>
              Get a Quote
            </Button>
          </div>
          <span
            className={`${styles["navbar__hambarger"]}`}
            onClick={handleToggle}
          >
            {open ? <RxCross1 /> : <RxHamburgerMenu />}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
