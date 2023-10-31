import { FaPlus } from "react-icons/fa";

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
    <div className="portfolio__img-wrap">
      <img
        className="portfolio__img"
        src={content.image}
        alt="portfolio-image"
      />
      <div className="portfolio__content">
        <FaPlus />

        <h2>{content.title}</h2>
        <p>{content.designation}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
