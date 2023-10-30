import { AiOutlineRight } from "react-icons/ai";

type ServiceCardType = {
  title: string;
  desc: string;
  color?: string;
  children: React.ReactNode | React.ReactElement;
};

const ServiceCard = ({ title, desc, children, color }: ServiceCardType) => {
  return (
    <div className="services__card">
      <div
        className="services__card-icon"
        style={{
          color: color ? color : "red",
        }}
      >
        {children}
      </div>
      <h2 className="services__card-title">{title}</h2>
      <p className="services__card-desc">{desc}</p>
      <a href="#" className="services__card-link">
        Read More <AiOutlineRight />
      </a>
    </div>
  );
};

export default ServiceCard;
