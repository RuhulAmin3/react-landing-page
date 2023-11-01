import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useSwiper } from "swiper/react";
import styles from "../../styles/_testimonial.module.scss";
const SliderBtn = () => {
  const swiper = useSwiper();
  return (
    <div className={`${styles["testimonial__btn"]}`}>
      <div
        className={`${styles["testimonial__prev-btn"]}`}
        onClick={() => swiper.slidePrev()}
      >
        <BiLeftArrow />
      </div>
      <div
        className={`${styles["testimonial__next-btn"]}`}
        onClick={() => swiper.slideNext()}
      >
        <BiRightArrow />
      </div>
    </div>
  );
};

export default SliderBtn;
