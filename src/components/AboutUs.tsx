import aboutUsImg from "../assets/images/about94.png";
import Button from "./ui/Button";
import { BiRightArrow } from "react-icons/bi";
const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container about-us__container">
        <div className="about-us__img">
          <img src={aboutUsImg} alt="about-us-image" />
        </div>
        <div className="about-us__content">
          <p className="about-us__text">About Us</p>
          <h2 className="about-us__title">
            Get Started With Our Software Agency
          </h2>
          <p className="about-us__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            officia atque sit magnam deserunt alias, earum quisquam modi
            perspiciatis sed! Ipsum, ex harum dolor repudiandae quaerat nisi
            sequi facilis ipsam itaque, suscipit maiores quis saepe! <br />{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quaerat rem consequatur neque blanditiis non tempore
            praesentium magni dolor harum modi, dolorem maiores? Aliquid
            consectetur eos, maiores nemo labore voluptatem.
          </p>
          <Button className="about-us__btn">
            Read More
            <BiRightArrow />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
