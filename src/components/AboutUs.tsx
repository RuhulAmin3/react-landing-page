// import "../styles/AboutUs.module.scss";
import aboutUsImg from "../assets/images/about94.png";
import Button from "./ui/Button";
import { BiRightArrow } from "react-icons/bi";
import styles from "../styles/_aboutUs.module.scss";
const AboutUs = () => {
  return (
    <section className={styles["about-us"]} id="about-us">
      <div
        className={`${styles["container"]} ${styles["about-us__container"]}`}
      >
        <div className={styles["about-us__img"]}>
          <img src={aboutUsImg} alt="about-us-image" />
        </div>
        <div className={`${styles["about-us__content"]}`}>
          <p className={`${styles["about-us__text"]}`}>About Us</p>
          <h2 className={`${styles["about-us__title"]}`}>
            Get Started With Our Software Agency
          </h2>
          <p className={`${styles["about-us__desc"]}`}>
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
          <Button className={`${styles["about-us__btn"]}`}>
            Read More
            <BiRightArrow />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
