import logo from "../assets/images/logo.png";
import { FaFacebook, FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiRightArrow, BiSolidPhone } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "../styles/_footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer className={`${styles["footer"]}`}>
        <div
          className={`${styles["footer__container"]} ${styles["container"]}`}
        >
          <div className={`${styles["footer__content"]}`}>
            <div className={`${styles["footer__social-link"]}`}>
              <img src={logo} alt="logo" />
              <p>
                Grursus mal suada faci Lorem to the ipsum dolarorit more ametion
                more consectetur elit.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillTwitterCircle />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles["footer__services"]}`}>
              <h2>Our Services</h2>
              <ul>
                <li>
                  <a href="">
                    <BiRightArrow /> Interface Design
                  </a>
                </li>
                <li>
                  <a href="">
                    <BiRightArrow /> Seo Optimizer
                  </a>
                </li>
                <li>
                  <a href="">
                    <BiRightArrow /> Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="">
                    <BiRightArrow /> Market Monitor
                  </a>
                </li>
                <li>
                  <a href="">
                    <BiRightArrow /> Graphic Design
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles["footer__important-link"]}`}>
              <h2>Important Link</h2>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <BiRightArrow /> About Us
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <BiRightArrow /> Contact Us
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <BiRightArrow /> Portfolio
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <BiRightArrow /> Privacy & policy
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <BiRightArrow /> Our Media
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles["footer__contact-info"]}`}>
              <h2>Contact Information</h2>
              <p>Grursus mal suada faci lisis Lorem to ipsum consectetur.</p>
              <ul>
                <li>
                  {" "}
                  <span>
                    <FaMapMarkedAlt />
                  </span>{" "}
                  113 Sassnex, White House, New Jercy, USA
                </li>
                <li>
                  {" "}
                  <span>
                    <BiSolidPhone />
                  </span>
                  +880-174-686-1700
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>
                  dev.ruhulamin3@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={`${styles["footer__finish-line"]}`}>
        <p>© 2023 digeco. All Rights Reserved by Md.Ruhul Amin</p>
      </div>
    </>
  );
};

export default Footer;
