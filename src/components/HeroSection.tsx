import heroImg from "../assets/images/illustration1.png";
import Button from "./ui/Button";
const HeroSection = () => {
  return (
    <div className="container-full hero-area">
      <div className="container hero-content-container">
        <div className="hero-content">
          <p>IT Design & Consulting</p>
          <h2>Our Intelligent Technology Solutions And Services</h2>
          <p className="hero-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            possimus amet esse dolore commodi eos harum quidem earum corporis
            rerum?
          </p>

          <Button className="hero-btn">Our Services</Button>
          <Button className="play-btn">Watch Video</Button>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
