import { Link } from "react-router-dom";

import Logo from "../Logo";
import { navLinks } from "../../../data/data";

function FooterMain() {
  return (
    <div className="mt-50 py-50 flex flex-col justify-center items-center">
      <Logo />
      <nav className="flex my-35">
        {navLinks.map((link, i) => (
          <Link
            to={link.to}
            className={`uppercase text-gray300 hover:text-primary transition duration-300 font-medium text-[14px] ${
              i !== 0 && "ml-25"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <p className="text-[14px] text-gray400 font-semibold">
        2023 &copy; All rights reserved
      </p>
    </div>
  );
}

export default FooterMain;
