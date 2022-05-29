import React from "react";
import "./epStep3.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";

const EpStep3 = () => {
  return (
    <div className="epStep3">
      <div className="epStep3_container">
        <div className="epStep3_heading">
          <h1>Customise Your Avatar</h1>
          <p>
            Create your own personalized avatar to flaunt around in the
            metaverse
          </p>
        </div>
        <div className="epStep3_content">
          <div className="epStep3_left">
            <div className="epStep3_name_input">
              <input type="text" placeholder="Shrey Mishra" />
            </div>
            <div className="epStep3_gender">{/* <Male/> */}</div>
            <Swiper
              className="swiper_style"
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>step 1</SwiperSlide>
              <SwiperSlide>step 2</SwiperSlide>
              <SwiperSlide>step 3</SwiperSlide>
              <SwiperSlide>step 4</SwiperSlide>
            </Swiper>
          </div>
          <div className="epStep3_right">
            <ul>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
              <li>i</li>
            </ul>
            <div className="epStep_btn">
              <button>Randomise</button>
              <button className="epsProceedBTN">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpStep3;
