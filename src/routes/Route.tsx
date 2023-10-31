import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import TrustedBySection from "../components/TrustedBySection";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/trusted-by",
    element: <TrustedBySection />,
  },
]);

export default router;
