import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import Logo from "../Logo";
import DarkButton from "../../utilities/buttons/DarkButton";
import { navLinks } from "../../../data/data";

function HeaderTop({ mobileNavOpened, dispatcher }) {
  function toggleMobileNav() {
    dispatcher({ type: "TOGGLE_MOBILE_NAV" });
  }

  return (
    <header className="py-5 px-20 flex justify-between items-center">
      <Logo />
      <ul className="flex items-center max-md:hidden">
        {navLinks.map((link, i) => (
          <li className={i !== 0 ? "ml-[30px]" : null} key={i}>
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
      <DarkButton className="max-md:hidden">Get in touch</DarkButton>
      <button className="md:hidden text-[30px]" onClick={toggleMobileNav}>
        {mobileNavOpened ? (
          <HiX className="animate__animated animate__flip" />
        ) : (
          <HiMenu className="animate__animated animate__flip" />
        )}
      </button>
    </header>
  );
}

export default HeaderTop;
