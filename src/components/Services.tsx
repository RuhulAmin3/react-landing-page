import Titlebar from "./ui/Titlebar";
import ServiceCard from "./ui/ServiceCard";
import { serviceContent } from "../constant";
import styles from "../styles/_services.module.scss";
const Services = () => {
  return (
    <section className={`${styles["services"]}`} id="services">
      <div className={`${["container"]} ${styles["services__container"]}`}>
        <Titlebar text="Feature" title="Let’s Check Our Services">
          Lorem Ipsum is simply dummy text of the printing and typesetting has{" "}
          <br />
          been the industrys standard dummy text ever since
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
