import { useDispatch, useSelector } from "react-redux";

import HeaderTop from "./HeaderTop";
import MobileNav from "./MobileNav";

function Header() {
  const mobileNavOpened = useSelector((state) => state.mobileNavOpened);
  const dispatcher = useDispatch();

  return (
    <>
      <HeaderTop mobileNavOpened={mobileNavOpened} dispatcher={dispatcher} />
      <MobileNav mobileNavOpened={mobileNavOpened} />
    </>
  );
}

export default Header;
