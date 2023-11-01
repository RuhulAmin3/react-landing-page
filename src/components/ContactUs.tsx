import Button from "./ui/Button";
import Titlebar from "./ui/Titlebar";
import contactUsImg from "../assets/images/contact-us.png";
import styles from "../styles/_contactUs.module.scss";
const ContactUs = () => {
  return (
    <section className={`${styles["contact-us"]}`} id="contact-us">
      <div
        className={`${styles["container"]} ${styles["contact-us__container"]}`}
      >
        <Titlebar text="Contact us" title="How May We Help You!">
          Grursus mal suada faci lisis Lorem ipsum consectetur elit. Grursus mal
          suada faci lisis Lorem ipsum consectetur elit.
        </Titlebar>
        <div className={`${styles["contact-us__content"]}`}>
          <form className={`${styles["contact-us__form"]}`}>
            <div className={`${styles["contact-us__name"]}`}>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email address" />
            <textarea
              name="message"
              id="textarea"
              placeholder="Write your message"
              cols={30}
              rows={5}
            />
            <Button
              className={`${styles["contact-us__submit-btn"]}`}
              type="sumit"
            >
              Submit Now
            </Button>
          </form>
          <div className={`${styles["contact-us__image"]}`}>
            <img src={contactUsImg} alt="contact-us-image" />
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default ContactUs;
