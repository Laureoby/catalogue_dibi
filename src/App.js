import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import './App.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slider_image1 from './assets/Dibi-tech_flyer.png';
import slider_image2 from './assets/WTM.jpg';
import slider_image3 from './assets/count.jpg';
import slider_image4 from './assets/day_yekov.jpg';
import slider_image5 from './assets/attestation.jpg';
import slider_image6 from './assets/certificate.png';
import slider_image7 from './assets/garderie.png';
import slider_image8 from './assets/speaker.jpg';
import slider_image9 from './assets/panel2.jpg';
import slider_image10 from './assets/visite.png';

function App() {
  return (
    <div className='container'>
      <h1 className='heading'>Découvrez nos réalisations à ETS DIBI-TECH</h1>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }} 
          pagination={{el:'.swiper-pagination', clickable:true}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper-container'>
        <SwiperSlide>
          <img src={slider_image1} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image2} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image3} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image4} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image5} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image6} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image7} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image8} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image9} alt="#" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image10} alt="#" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        {/* <div className="swiper-pagination"></div>  */}
      </Swiper> 
    </div>
  );
}

export default App;
