type NavItemProps = {
  link: string;
  text: string;
};

const NavItem = ({ link, text }: NavItemProps) => {
  return (
    <li className="navbar__item">
      <a href={link}>{text}</a>{" "}
    </li>
  );
};

export default NavItem;
