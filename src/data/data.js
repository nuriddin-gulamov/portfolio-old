import { FaReact, FaLocationArrow, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiJavascript } from "react-icons/si";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { RiFilePaper2Fill, RiComputerFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";

import about from "../assets/about.png";
import portfolio from "../assets/portfolio.png";
import ielts from "../assets/ielts.png";

// Header Data
export const navLinks = [
  { to: '/', title: "Home" },
  { to: '/about', title: "About" },
  { to: '/works', title: "Works" },
  { to: '/contact', title: "Contact" },
];

// Footer Data
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

// Home Screen Data
export const infoBoxes = [
  {
    img: about,
    subtitle: "PERSONAL INFO",
    title: "About Me",
    to: '/about',
  },
  {
    img: portfolio,
    subtitle: "MY WORKS",
    title: "Portfolio",
    to: '/works',
  },
  {
    img: ielts,
    subtitle: "SHOWTIME",
    title: "My IELTS",
    to: "https://drive.google.com/file/d/1ynF6cUSJ1P_EJfKT0ECZ0ziQJFraA4Yd/view",
  },
];

export const services = [
  { icon: FaReact, title: "React" },
  { icon: FaReact, title: "React Native" },
  { icon: SiTailwindcss, title: "Tailwind" },
  { icon: SiRedux, title: "Redux" },
];

export const profiles = [{ icon: BsLinkedin }, { icon: BsYoutube }];

// About Screen Data
export const fundamentals = [
  {
    subtitle: "Born and Living Place",
    icon: FaLocationArrow,
    title: "Tashkent, Uzbekistan",
    description: "I currently live in Tashkent, Uzbekistan.",
  },
  {
    subtitle: "IELTS Ceritified",
    icon: RiFilePaper2Fill,
    title: "IELTS - Band 7.0",
    description:
      "I have got IELTS with 7.0 Band score Overall. (Speaking - 8.0)",
  },
  {
    subtitle: "I'm in love with Technology",
    icon: BiWorld,
    title: "Technology - Crusial Factor",
    description:
      "I always try to stay up to date with the latest tech leaks, such as ChatGPT, AI and so on.",
  },
  {
    subtitle: "Good Communication skills",
    icon: AiOutlineTeam,
    title: "Communication Skills",
    description:
      "I also think that being able to communicate with clients in a proper way is a huge important role for a developer, and not only...",
  },
];

export const history = [
  {
    subtitle: "June 2020 - September 2020",
    icon: RiComputerFill,
    title: "Learning Front-end Development",
    description:
      "During this lifetime of mine, I learned the BASICS, of Front-end Development",
  },
  {
    subtitle: "October 2020 - May 2021",
    icon: SiJavascript,
    title: "Diving Deeper into JavaScript",
    description:
      "At this time, I dived deeper to get a more deeper undestanding of what JavaScript, ReactJS actually is",
  },
  {
    subtitle: "June 2021 - September 2021",
    icon: FaNodeJs,
    title: "Introduction to Back-end Development",
    description:
      "In Summer 2021, I took my time to learn the basics of NodeJS (Back-end)",
  },
  {
    subtitle: "October 2021 - Present",
    icon: FaReact,
    title: "Improving my skils of React and React Native",
    description:
      "Since 2021 Fall, I have been working hard to improve my skills on ReactJS, and React Native as well.",
  },
  {
    subtitle: "August 2022 - Novemeber 2022",
    icon: RiFilePaper2Fill,
    title: "I took the IELTS test.",
    description:
      "I took this time to practice my IELTS skills and got 7.0 Band Score.",
  },
];
