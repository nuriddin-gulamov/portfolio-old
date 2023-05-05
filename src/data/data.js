import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { BsLinkedin, BsYoutube } from "react-icons/bs";

import about from "../assets/about.png";
import portfolio from "../assets/portfolio.png";
import ielts from "../assets/ielts.png";

export const navLinks = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/works", title: "Works" },
  { to: "/contact", title: "Contacts" },
];

export const infoBoxes = [
  { img: about, subtitle: "PERSONAL INFO", title: "About Me" },
  { img: portfolio, subtitle: "MY WORKS", title: "Portfolio" },
  { img: ielts, subtitle: "MY IELTS CERTIFICATE", title: "My IELTS" },
];

export const services = [
  { icon: FaReact, title: "React" },
  { icon: FaReact, title: "React Native" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: SiRedux, title: "Redux" },
];

export const profiles = [{ icon: BsLinkedin }, { icon: BsYoutube }];
