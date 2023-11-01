import { HashLink as Link } from "react-router-hash-link";
import styles from "../../styles/_navbar.module.scss";
type NavItemProps = {
  link: string;
  text: string;
  handleToggle: () => void;
};

const NavItem = ({ link, text, handleToggle }: NavItemProps) => {
  return (
    <li className={`${styles["navbar__item"]}`} onClick={handleToggle}>
      <Link
        to={link}
        scroll={(el) => el.scrollIntoView({ behavior: "auto", block: "end" })}
      >
        {text}
      </Link>{" "}
    </li>
  );
};

export default NavItem;
