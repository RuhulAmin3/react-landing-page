import { BsStarFill } from "react-icons/Bs";
import testimonial1 from "../../assets/images/testimonial1.png";
import styles from "../../styles/_testimonial.module.scss";
type SliderType = {
  user: string;
  designation: string;
  star: number;
  description: string;
};

type PropsType = {
  slider: SliderType;
};

const Slider = ({ slider }: PropsType) => {
  return (
    <div className={`${styles["testimonial__slider"]}`}>
      <div className={`${styles["testimonial__slider-content"]}`}>
        <div className={`${styles["testimonial__slider-user"]}`}>
          <img src={testimonial1} alt="testimonial1" />
          <div>
            <h2>{slider.user}</h2>
            <p>{slider.designation}</p>
          </div>
        </div>
        <div className={`${styles["testimonial__slider-star"]}`}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      </div>
      <p className={`${styles["testimonial__slider-review"]}`}>
        {slider.description}
      </p>
    </div>
  );
};

export default Slider;
