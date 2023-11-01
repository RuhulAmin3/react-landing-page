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
        <Titlebar text="Trusted By" title="Trusted Partners">
          Trusted by Those Who Believe in Our Excellence: We've earned the trust
          of an extensive network of clients, partners track record of success
          and the long-lasting relationships dedication to excellence and
          innovation. Join our community of trust and experience the difference
          for yourself
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
