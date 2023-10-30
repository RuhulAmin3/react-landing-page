import { FaFilter } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
const ServiceCard = () => {
  return (
    <div className="services__card">
      <div className="services__card-icon">
        <FaFilter />
      </div>
      <h2 className="services__card-title">Market Research</h2>
      <p className="services__card-desc">
        Grursus mal suada faci ipsum to and the and dolarorit ametion
        consectetur elitto more bulum that odio
      </p>
      <a href="#" className="services__card-link">
        Read More <AiOutlineRight />
      </a>
    </div>
  );
};

export default ServiceCard;
