import React from "react";
import "./section2.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Section2Card from "./Section2Card";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2_container">
        <div className="section2_heading">
          <h1>Explore our Spaces in the Metaverse</h1>
          <p>
            Spaces Created On MetaQube And Published By Various Individual
            Artists As Well As By The MetaQube Team
          </p>
          <div className="section2_card_Section">
            <Swiper
              className="swiper_style"
              slidesPerView={3}
              spaceBetween={20}
              freeMode={true}
              pagination={{
                clickable: true,
                el: "pagination_bullet_el",
                bulletClass: "pagination_bullet",
              }}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
              <SwiperSlide>
                <Section2Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
