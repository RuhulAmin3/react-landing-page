import Slider from "./ui/Slider";
import Titlebar from "./ui/Titlebar";
import { sliderContent } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderBtn from "./ui/SliderBtn";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container testimonial__container">
        <Titlebar text="testimonial" title="Customers Feedback">
          Lorem Ipsum is simply dummy text of the printing and typesetting has
          been the <br /> industrys standard dummy text ever since
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
          className="testimonial__slider-container"
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
