import React from "react";
import "./section2.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Section2Card from "./Section2Card";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const cardData = [
  { image: "section2img1", title: "The Lata Mangeshkar Tribute" },
  { image: "section2img2", title: "Prodcut showroom ( Cromaxes)" },
  { image: "section2img3", title: "Tarun Tahliani Boutique express" },
];

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
              slidesPerView={1}
              spaceBetween={1}
              freeMode={true}
              pagination={{
                clickable: true,
                el: "pagination_bullet_el",
                bulletClass: "pagination_bullet",
              }}
              modules={[FreeMode, Pagination]}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 2,
                },
              }}
            >
              {cardData.map((data) => (
                <SwiperSlide>
                  <Section2Card data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
