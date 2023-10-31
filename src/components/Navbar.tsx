import NavItem from "./ui/NavItem";
import logo from "../assets/images/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "./ui/Button";
import { useEffect } from "react";
const Navbar = () => {
  const navbarContent = [
    { link: "#", text: "Home" },
    { link: "#", text: "About Us" },
    { link: "#", text: "Services" },
    { link: "#", text: "Team" },
    { link: "#", text: "Portfolio" },
    { link: "#", text: "Testimonial" },
  ];

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
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar__navbar-list">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
