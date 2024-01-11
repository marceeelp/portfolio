import { Link } from "react-router-dom";
import { usePage, usePageSwitch } from "../../contexts/PageContext";
import links from "../nav/links";
import "./mobileNav.css";

const MobileNav = ({ handleClick }) => {
  const page = usePage();
  const pageSwitch = usePageSwitch();

  return (
    <nav className="mobile--nav">
      <ul className="mobile--nav-links">
        {links.map((link, i) => (
          <li
            key={i}
            className="nav--link"
            onClick={() => {
              pageSwitch(link.name);
              handleClick();
            }}
          >
            <Link to={link.path} className={page === link.name ? "active" : ""}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mobile--socials">
        <a href="mailto:marceelp@proton.me">Mail</a>
        <a href="https://instagram.com/marceelp">Instagram</a>
      </div>
    </nav>
  );
};

export default MobileNav;
