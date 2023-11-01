import Button from "./ui/Button";
import { BiRightArrow } from "react-icons/bi";
import PortfolioItem from "./ui/PortfolioItem";
import { portfolioContent } from "../constant";
import styles from "../styles/_portfolio.module.scss";
const Portfolio = () => {
  return (
    <>
      <section className={`${styles["portfolio"]}`} id="portfolio">
        <div className={`${styles["portfolio__titlebar"]}`}>
          <p className={`${styles["portfolio__titlebar-text"]}`}>
            Project Gallery
          </p>
          <p className={`${styles["portfolio__titlebar-desc"]}`}>
            A visual showcase of our successful ventures. Get a glimpse into our
            expertise and the diverse range of projects we've delivered, from
            web applications to mobile solutions. Browse through our Project
            Gallery to see how we've transformed ideas into reality, each
            project a testament to our commitment to quality, innovation, and
            client satisfaction.
          </p>
        </div>
      </section>
      <div
        className={`${styles["container"]} ${styles["portfolio__container"]}`}
      >
        <div className={`${styles["portfolio__gallary"]}`}>
          {portfolioContent.map((content, idx) => (
            <PortfolioItem content={content} key={idx} />
          ))}
        </div>
        <Button className={`${styles["portfolio__btn"]}`}>
          View More <BiRightArrow />{" "}
        </Button>
      </div>
    </>
  );
};

export default Portfolio;
