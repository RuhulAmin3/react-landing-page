import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Portfolio from "../components/portfolio";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <Portfolio />
    </>
  );
};

export default Home;
