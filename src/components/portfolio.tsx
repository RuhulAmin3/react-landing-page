import Button from "./ui/Button";
import { BiRightArrow } from "react-icons/bi";
import PortfolioItem from "./ui/PortfolioItem";
import { portfolioContent } from "../constant";
const Portfolio = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="portfolio__titlebar">
          <p className="portfolio__titlebar-text">Project Gallery</p>
          <p className="portfolio__titlebar-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            quos, voluptatem quidem suscipit nesciunt fuga deleniti eligendi
            autem? Ipsa, atque ducimus voluptatum inventore odit molestias
            soluta ut. Optio, maxime repudiandae!
          </p>
        </div>
      </section>
      <div className="container portfolio__container">
        <div className="portfolio__gallary">
          {portfolioContent.map((content, idx) => (
            <PortfolioItem content={content} key={idx} />
          ))}
        </div>
        <Button className="portfolio__btn">
          View More <BiRightArrow />{" "}
        </Button>
      </div>
    </>
  );
};

export default Portfolio;
