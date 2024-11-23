import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <Link to={"/"} className="text-3xl text-red-400">
        Logo
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <NavLink to={"/about-us"}>About Us</NavLink>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
