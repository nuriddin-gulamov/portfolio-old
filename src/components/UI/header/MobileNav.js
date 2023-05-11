import { NavLink } from "react-router-dom";

import DarkButton from "../../utilities/buttons/DarkButton";
import { navLinks } from "../../../data/data";

function MobileNav({ mobileNavOpened }) {
  return (
    <div
      className={`flex flex-col justify-center items-center h-[80vh] md:hidden animate__animated ${
        mobileNavOpened ? "flex" : "hidden"
      }`}
    >
      <ul className="flex flex-col items-center">
        {navLinks.map((link, i) => (
          <li className={i !== 0 ? "mt-20" : null} key={i}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-black hover:text-primary transition duration500"
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <DarkButton className="mt-20">Get in touch</DarkButton>
    </div>
  );
}

export default MobileNav;
