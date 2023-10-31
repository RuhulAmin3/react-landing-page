import { HashLink as Link } from "react-router-hash-link";

type NavItemProps = {
  link: string;
  text: string;
};

const NavItem = ({ link, text }: NavItemProps) => {
  return (
    <li className="navbar__item">
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
