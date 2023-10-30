import portfolioImg from "../assets/images/02_Portfolio-520x562.jpg";
import Button from "./ui/Button";
import { BiRightArrow } from "react-icons/bi";
const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container portfolio__container">
        <div className="container-full portfolio__bg">
          <div className="portfolio__titlebar">
            <p className="portfolio__titlebar-text">Project Gallery</p>
            <p className="portfolio__titlebar-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis quos, voluptatem quidem suscipit nesciunt fuga deleniti
              eligendi autem? Ipsa, atque ducimus voluptatum inventore odit
              molestias soluta ut. Optio, maxime repudiandae!
            </p>
          </div>
        </div>
        <div className="portfolio__gallary">
          <img src={portfolioImg} alt="portfolio-image" />
          <img src={portfolioImg} alt="portfolio-image" />
          <img src={portfolioImg} alt="portfolio-image" />
          <img src={portfolioImg} alt="portfolio-image" />
        </div>

        <Button className="portfolio__btn">
          View More <BiRightArrow />{" "}
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
