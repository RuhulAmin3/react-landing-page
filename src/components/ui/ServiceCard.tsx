import { AiOutlineRight } from "react-icons/ai";
import styles from "../../styles/_services.module.scss";

type ServiceCardType = {
  title: string;
  desc: string;
  color?: string;
  children: React.ReactNode | React.ReactElement;
};

const ServiceCard = ({ title, desc, children, color }: ServiceCardType) => {
  return (
    <div className={`${styles["services__card"]}`}>
      <div
        className={`${styles["services__card-icon"]}`}
        style={{
          color: color ? color : "red",
        }}
      >
        {children}
      </div>
      <h2 className={`${styles["services__card-title"]}`}>{title}</h2>
      <p className={`${styles["services__card-desc"]}`}>{desc}</p>
      <a href="#" className={`${styles["services__card-link"]}`}>
        Read More <AiOutlineRight />
      </a>
    </div>
  );
};

export default ServiceCard;
