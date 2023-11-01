import { FaPlus } from "react-icons/fa";
import styles from "../../styles/_portfolio.module.scss";
type ContentType = {
  image: string;
  title: string;
  designation: string;
};
type PropsType = {
  content: ContentType;
};
const PortfolioItem = ({ content }: PropsType) => {
  return (
    <div className={`${styles["portfolio__img-wrap"]}`}>
      <img
        className={`${styles["portfolio__img"]}`}
        src={content.image}
        alt="portfolio-image"
      />
      <div className={`${styles["portfolio__content"]}`}>
        <FaPlus />

        <h2>{content.title}</h2>
        <p>{content.designation}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
