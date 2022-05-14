import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from './icons/Banner1.jpg'
import './Banner.css'
import ad1 from './icons/Asset 1.png';
import ad2 from './icons/Asset 2.png';
import ad3 from './icons/Asset 3.png';

export default function Banner() {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function imgUrl() {
    const id = rand(1, 200);
    return `ad/${id}`;
  }
  
  function createSlide() {
    return (
      <SwiperSlide>
        <img className="img" src={ad1} alt="" />
      </SwiperSlide>
    );
  }
  function createSlide2() {
    return (
      <SwiperSlide>
        <img className="img" src={ad2} alt="" />
      </SwiperSlide>
    );
  }
  function createSlide3() {
    return (
      <SwiperSlide>
        <img className="img" src={ad3} alt="" />
      </SwiperSlide>
    );
  }
  return (
    <Swiper
    className='src1 flex mt-10 top-0  place-content-center mx-12 px-28'
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      
      {createSlide()}
      {createSlide2()}
      {createSlide3()}
    </Swiper>
  )
}
