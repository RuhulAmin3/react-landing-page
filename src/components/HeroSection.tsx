import heroImg from "../assets/images/illustration1.png";
import Button from "./ui/Button";
import styles from "../styles/_heroSection.module.scss";

const HeroSection = () => {
  return (
    <section
      className={`${styles["container-full"]} ${styles["hero-area"]}`}
      id="home"
    >
      <div
        className={`${styles["container"]} ${styles["hero-area__container"]}`}
      >
        <div className={`${styles["hero-area__content"]}`}>
          <p className={`${styles["hero-area__text"]}`}>
            IT Design & Consulting
          </p>
          <h2 className={`${styles["hero-area__title"]}`}>
            Our Intelligent Technology Solutions And Services
          </h2>
          <p className={`${styles["hero-area__desc"]}`}>
            Unlock the power of innovation with our intelligent technology
            solutions and services. We're here to elevate your business through
            cutting-edge technology and expertise.
          </p>
          <div>
            <Button className={`${styles["hero-area__btn"]}`}>
              Our Services
            </Button>
            <Button className={`${styles["hero-area__play-btn"]}`}>
              Watch Video
            </Button>
          </div>
        </div>
        <div className={`${styles["hero-area__img"]}`}>
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
