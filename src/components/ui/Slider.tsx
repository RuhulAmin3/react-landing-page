import { BsStarFill } from "react-icons/Bs";
import testimonial1 from "../../assets/images/testimonial1.png";

type SliderType = {
  user: string;
  designation: string;
  star: number;
};

type PropsType = {
  slider: SliderType;
};

const Slider = ({ slider }: PropsType) => {
  return (
    <div className="testimonial__slider">
      <div className="testimonial__slider-content">
        <div className="testimonial__slider-user">
          <img src={testimonial1} alt="testimonial1" />
          <div>
            <h2>{slider.user}</h2>
            <p>{slider.designation}</p>
          </div>
        </div>
        <div className="testimonial__slider-star">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      </div>
      <p className="testimonial__slider-review">
        Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion
        consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum
        that dolocons rsus mal suada
      </p>
    </div>
  );
};

export default Slider;
