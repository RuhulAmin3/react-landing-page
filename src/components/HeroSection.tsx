import heroImg from "../assets/images/illustration1.png";
import Button from "./ui/Button";
const HeroSection = () => {
  return (
    <section className="container-full hero-area" id="home">
      <div className="container hero-area__container">
        <div className="hero-area__content">
          <p className="hero-area__text">IT Design & Consulting</p>
          <h2 className="hero-area__title">
            Our Intelligent Technology Solutions And Services
          </h2>
          <p className="hero-area__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            possimus amet esse dolore commodi eos harum quidem earum corporis
            rerum?
          </p>
          <div>
            <Button className="hero-area__btn">Our Services</Button>
            <Button className="hero-area__play-btn">Watch Video</Button>
          </div>
        </div>
        <div className="hero-area__img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
