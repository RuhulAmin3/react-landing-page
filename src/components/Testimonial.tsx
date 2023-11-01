import Slider from "./ui/Slider";
import Titlebar from "./ui/Titlebar";
import { sliderContent } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderBtn from "./ui/SliderBtn";
import styles from "../styles/_testimonial.module.scss";
const Testimonial = () => {
  return (
    <section className={`${styles["testimonial"]}`} id="testimonial">
      <div
        className={`${styles["testimonial__container"]} ${styles["container"]}`}
      >
        <Titlebar text="testimonial" title="Customers Feedback">
          Hear from those who matter the most—our clients. Explore what our
          satisfied customers have to say about their experiences working with
          us. <br /> Our commitment to excellence is reflected in the
          testimonials and reviews from clients who have seen their projects
          come to life with our support.
        </Titlebar>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className={`${styles["testimonial__slider-container"]}`}
        >
          {sliderContent.map((slider, sliderIdx) => (
            <SwiperSlide key={sliderIdx}>
              <Slider key={slider.id} slider={slider} />
            </SwiperSlide>
          ))}
          <SliderBtn />
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

{
  /* <section className="testimonial">
<div className="container testimonial__container">
  <Titlebar text="testimonial" title="Customers Feedback">
    Lorem Ipsum is simply dummy text of the printing and typesetting has
    been the <br /> industrys standard dummy text ever since
  </Titlebar>
  <div className="testimonial__slider-container">
    {sliderContent.map((slider, sliderIdx) => (
      <Slider key={slider.id} slider={slider} sliderIdx={sliderIdx} />
    ))}
  </div>
  <div className="testimonial__btn">
    <div className="testimonial__prev-btn">
      <BiLeftArrow />
    </div>
    <div className="testimonial__next-btn">
      <BiRightArrow />
    </div>
  </div>
</div>
</section> */
}
