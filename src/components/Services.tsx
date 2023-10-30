import Titlebar from "./ui/Titlebar";
import ServiceCard from "./ui/ServiceCard";
import { FaLayerGroup, FaFilter } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { BsFillVolumeUpFill } from "react-icons/Bs";

const Services = () => {
  const serviceContent = [
    {
      title: "Market Research",
      desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
      icon: FaFilter,
      color: "red",
    },
    {
      title: "Creative Layout",
      desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
      icon: FaLayerGroup,
      color: "blue",
    },
    {
      title: "Digital Marketing",
      desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
      icon: BsFillVolumeUpFill,
      color: "#00c3ff",
    },
    {
      title: "SEO & Backlinks",
      desc: "Grursus mal suada faci ipsum to and the and dolarorit ametion consectetur elitto more bulum that odio",
      icon: GiChart,
      color: "#ffc048",
    },
  ];
  return (
    <section className="services">
      <div className="container services__container">
        <Titlebar text="Feature" title="Let’s Check Our Services">
          Lorem Ipsum is simply dummy text of the printing and typesetting has{" "}
          <br />
          been the industrys standard dummy text ever since
        </Titlebar>
        <div className="services__card-container">
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
