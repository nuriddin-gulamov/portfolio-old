import { useSelector } from "react-redux";

import FooterMain from "./FooterMain";
import FooterTop from "./FooterTop";

function Footer() {
  const mobileNavOpened = useSelector((state) => state.mobileNavOpened);
  return (
    <footer
      className={`py-20 ${mobileNavOpened ? "hidden" : "block"}`}
    >
      <FooterTop />
      <FooterMain />
    </footer>
  );
}

export default Footer;
