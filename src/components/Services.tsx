import Titlebar from "./ui/Titlebar";
import ServiceCard from "./ui/ServiceCard";
import { serviceContent } from "../constant";
import styles from "../styles/_services.module.scss";
const Services = () => {
  return (
    <section className={`${styles["services"]}`} id="services">
      <div className={`${["container"]} ${styles["services__container"]}`}>
        <Titlebar text="Feature" title="Let’s Check Our Services">
          Explore our comprehensive range of services designed to meet your
          every need. We're here to elevate your business with top-notch
          solutions. <br />
          From web development to mobile apps, we've got you covered – it's time
          to discover what we can do for you.
        </Titlebar>
        <div className={`${styles["services__card-container"]}`}>
          {serviceContent.map((content, idx) => (
            <ServiceCard
              color={content.color}
              title={content.title}
              desc={content.desc}
              key={idx}
            >
              <content.icon />
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
