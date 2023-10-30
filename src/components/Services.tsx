import Titlebar from "./ui/Titlebar";
import ServiceCard from "./ui/ServiceCard";

const Services = () => {
  return (
    <section className="services">
      <div className="container services__container">
        <Titlebar text="Feature" title="Let’s Check Our Services">
          Lorem Ipsum is simply dummy text of the printing and typesetting has{" "}
          <br />
          been the industrys standard dummy text ever since
        </Titlebar>
        <div className="services__card-container">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
