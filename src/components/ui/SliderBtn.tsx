import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useSwiper } from "swiper/react";

const SliderBtn = () => {
  const swiper = useSwiper();
  return (
    <div className="testimonial__btn">
      <div className="testimonial__prev-btn" onClick={() => swiper.slidePrev()}>
        <BiLeftArrow />
      </div>
      <div className="testimonial__next-btn" onClick={() => swiper.slideNext()}>
        <BiRightArrow />
      </div>
    </div>
  );
};

export default SliderBtn;
