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
  { to: "/contact", title: "Contact" },
];

export const infoBoxes = [
  { img: about, subtitle: "PERSONAL INFO", title: "About Me", to: '/about' },
  { img: portfolio, subtitle: "MY WORKS", title: "Portfolio", to: '/works' },
  { img: ielts, subtitle: "SHOWTIME", title: "My IELTS", to: '/ielts' },
];

export const services = [
  { icon: FaReact, title: "React" },
  { icon: FaReact, title: "React Native" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: SiRedux, title: "Redux" },
];

export const profiles = [{ icon: BsLinkedin }, { icon: BsYoutube }];

export const stats = [
  {
    numbers: "2+",
    title: "YEARS OF \n EXPERIENCE",
  },
  {
    numbers: "10+",
    title: "SATISFIED CLIENTS",
  },
  {
    numbers: "50+",
    title: "PROJECTS COMPLETE",
  },
];
