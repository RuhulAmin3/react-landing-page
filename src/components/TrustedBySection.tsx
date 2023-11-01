import logo1 from "../assets/images/04_Logo.png";
import logo2 from "../assets/images/05_Logo.png";
import logo3 from "../assets/images/06_Logo.png";
import Titlebar from "./ui/Titlebar";
import styles from "../styles/_trustedBySection.module.scss";
const TrustedBySection = () => {
  return (
    <section className={`${styles["trusted-by"]}`}>
      <div
        className={`${styles["trusted-by__container"]} ${styles["container"]}`}
      >
        <Titlebar text="Trusted By" title="Who Trust Us">
          Grursus mal suada faci lisis Lorem ipsum consectetur elit. Grursus mal
          suada faci lisis Lorem ipsum consectetur elit.
        </Titlebar>
        <div className={`${styles["trusted-by__content"]}`}>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo1} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
