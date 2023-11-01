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
    user: "Barner Wington",
    designation: "MERN developer",
    description:
      "Our journey with this team has been marked by their exceptional commitment to our success. Their dedication is reflected in the numerous positive reviews from clients who share our deep.",
    star: 5,
  },
  {
    id: 2,
    user: "Kate Kingston",
    designation: "Web developer",
    description:
      "From the very beginning, it was evident that we had made the right choice. The testimonials and reviews are not mere words; they embody a resolute.",
    star: 5,
  },
  {
    id: 3,
    user: "Jhon Done",
    designation: "Backed developer",
    description:
      "Their team has translated our vision into a breathtaking reality. The echo of positive customer feedback mirrors our own experience with their unwavering pursuit of excellence.",
    star: 5,
  },
  {
    id: 4,
    user: "Kingon Own",
    designation: "Graphic developer",
    description:
      "It's not just about their impressive skills; it's  truly sets them apart. The reviews are not mere endorsements; they are a living testament to their relentless pursuit of excellence",
    star: 5,
  },
  {
    id: 5,
    user: " Amanda K",
    designation: "Graphic developer",
    description:
      "Exceptional dedication and results! Our project's journey with this team has been remarkable, and their numerous positive reviews speak volumes about their commitment to excellence.",
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
    desc: "Our market research service is the compass that guides your business decisions. We delve deep into market trends, consumer insights, and competition.",
    icon: FaFilter,
    color: "red",
  },
  {
    title: "Creative Layout",
    desc: "Elevate your brand's visual appeal with our creative layout expertise. Our designs merge form and function to leave a lasting impact on your audience.",
    icon: FaLayerGroup,
    color: "blue",
  },
  {
    title: "Digital Marketing",
    desc: "Unleash the full potential of your online presence with our digital marketing strategies. We create tailored campaigns ensuring your brand's success in the digital landscape",
    icon: BsFillVolumeUpFill,
    color: "#00c3ff",
  },
  {
    title: "SEO & Backlinks",
    desc: "Boost your online visibility and authority with our SEO and backlink strategies. We optimize your website for search engines  ensuring your business climbs the rankings in your industry.",
    icon: GiChart,
    color: "#ffc048",
  },
];
