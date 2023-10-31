import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Portfolio from "../components/Portfolio";
import ContactUs from "../components/ContactUs";
import TrustedBySection from "../components/TrustedBySection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <Portfolio />
      <Testimonial />
      <ContactUs />
      <TrustedBySection />
      <Footer />
    </>
  );
};

export default Home;
