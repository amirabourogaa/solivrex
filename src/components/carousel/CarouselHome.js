
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./style.css";

// images import 
import logo from "../../imgs/logo.jpeg"
import del1 from "../../imgs/del1.jpg"
import del2 from "../../imgs/del2.jpg"
import del3 from "../../imgs/del3.jpg"
import del4 from "../../imgs/del4.jpg"
import del5 from "../../imgs/del5.jpg"
import del6 from "../../imgs/del6.jpg"
import del7 from "../../imgs/del7.jpg"
import del8 from "../../imgs/del8.jpg"
import del9 from "../../imgs/del9.jpg"
import del10 from "../../imgs/del10.jpg"
// import Swiper core and required modules

import { EffectCube, Pagination } from "swiper";




export default function Swipe() {
  
  
  
  return (
    <>
    <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        // pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} />
          <img style = {{width:"60px" , height:"70px"}} src="https://media3.giphy.com/media/YSwimyADq6MYzpmpDR/giphy.gif?cid=6c09b9526lhy9twp2kdq3wnazod1lxpjkzd34umxfk21ggla&rid=giphy.gif&ct=s"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />

        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />

        </SwiperSlide>
        <SwiperSlide>
          <img src={logo} />

        </SwiperSlide>
      </Swiper>
    </>
  )
}