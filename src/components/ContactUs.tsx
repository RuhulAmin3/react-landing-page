import Button from "./ui/Button";
import Titlebar from "./ui/Titlebar";
import contactUsImg from "../assets/images/contact-us.png";
const ContactUs = () => {
  return (
    <section className="contact-us" id="contact-us">
      <div className="container contact-us__container">
        <Titlebar text="Contact us" title="How May We Help You!">
          Grursus mal suada faci lisis Lorem ipsum consectetur elit. Grursus mal
          suada faci lisis Lorem ipsum consectetur elit.
        </Titlebar>
        <div className="contact-us__content">
          <form className="contact-us__form">
            <div className="contact-us__name">
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
            <Button className="contact-us__submit-btn" type="sumit">
              Submit Now
            </Button>
          </form>
          <div className="contact-us__image">
            <img src={contactUsImg} alt="contact-us-image" />
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default ContactUs;
