import portfolioImg from "../assets/images/02_Portfolio-520x562.jpg";
import portfolioImg2 from "../assets/images/03_Portfolio-520x562.jpg";
import portfolioImg3 from "../assets/images/04_Portfolio-520x562.jpg";
import portfolioImg4 from "../assets/images/05_Portfolio-520x562.jpg";

// team member images
import teamImg1 from "../assets/images/team1.jpg";
import teamImg2 from "../assets/images/team3.jpg";
import teamImg4 from "../assets/images/team4.jpg";
import teamImg5 from "../assets/images/team5.jpg";

// service content Icon

import { FaLayerGroup, FaFilter } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { BsFillVolumeUpFill } from "react-icons/Bs";

export const sliderContent = [
  {
    id: 1,
    user: "Kate Kingston",
    designation: "Web developer",
    description:
      "Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada",
    star: 5,
  },
  {
    id: 2,
    user: "Kate Kingston",
    designation: "Web developer",
    description:
      "Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada",
    star: 5,
  },
  {
    id: 3,
    user: "Jhon Done",
    designation: "Backed developer",
    description:
      "Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada",
    star: 5,
  },
  {
    id: 4,
    user: "Kingon Own",
    designation: "Graphic developer",
    description:
      "Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada",
    star: 5,
  },
];

export const portfolioContent = [
  {
    image: portfolioImg,
    title: "From Print to Platform",
    designation: "Web design",
  },
  {
    image: portfolioImg2,
    title: "From Print to Platform",
    designation: "Web design",
  },
  {
    image: portfolioImg3,
    title: "From Print to Platform",
    designation: "Web design",
  },
  {
    image: portfolioImg4,
    title: "From Print to Platform",
    designation: "Web design",
  },
];

export const teamContent = [
  { name: "Fhilip Chotler", designation: "Web Designer", image: teamImg1 },
  {
    name: "John Mertunoz",
    designation: "Mobile App Developer",
    image: teamImg2,
  },
  { name: "Tom Harish", designation: "Frontend Designer", image: teamImg5 },
  {
    name: "Michael Jackson",
    designation: "Cyber Security Expert",
    image: teamImg4,
  },
];

export const navbarContent = [
  { link: "#home", text: "Home" },
  { link: "#about-us", text: "About Us" },
  { link: "#services", text: "Services" },
  { link: "#team", text: "Team" },
  { link: "#portfolio", text: "Portfolio" },
  { link: "#testimonial", text: "Testimonial" },
  { link: "#contact-us", text: "Contact Us" },
];

export const serviceContent = [
  {
    title: "Market Research",
    desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
    icon: FaFilter,
    color: "red",
  },
  {
    title: "Creative Layout",
    desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
    icon: FaLayerGroup,
    color: "blue",
  },
  {
    title: "Digital Marketing",
    desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
    icon: BsFillVolumeUpFill,
    color: "#00c3ff",
  },
  {
    title: "SEO & Backlinks",
    desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
    icon: GiChart,
    color: "#ffc048",
  },
];
