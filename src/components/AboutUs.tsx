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
            At our software agency, we're more than just a team of developers;
            we're your strategic partners in navigating the digital landscape.
            Our mission is to empower your business by crafting innovative
            software solutions that drive growth and deliver exceptional user
            experiences. With a deep commitment to quality and innovation, we
            take pride in turning your ideas into reality. We believe that every
            project is an opportunity to create something remarkable. <br />{" "}
            <br />
            Our dedicated team of experts combines their technical prowess and
            creativity to deliver tailor-made software solutions. We listen to
            your needs, understand your vision, and then build custom software
            that exceeds expectations. We're at the forefront of the latest
            technologies, ensuring that your solutions are not only cutting-edge
            but also scalable and adaptable for future growth.
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
