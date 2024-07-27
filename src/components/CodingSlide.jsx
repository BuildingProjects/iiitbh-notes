import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules'

import slide_image1 from '../assets/IIITlogo.png';
import slide_image2 from '../assets/IIITlogo.png';
import slide_image3 from '../assets/IIITlogo.png';
import slide_image4 from '../assets/IIITlogo.png';
import slide_image5 from '../assets/IIITlogo.png';

function CodingSlide() {
  return (
    <div className="container">
      <h1 className='heading font-bold text-blue-500 underline underline-offset-8'>Coding Source</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5,
        }
      }
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className='swiper_container'
      >
        <SwiperSlide>
          <div>
          <img src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg' alt="Graph Serie" className='lg:h-48 md:h-36 w-full object-cover object-center fitImg' />
          <div className='text-indigo-500'>graph is easy</div>
          <div><a href="https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn">Learn More</a></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image5} alt="slide_image" />
        </SwiperSlide>

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
                <SlArrowLeftCircle/>
          </div>
          <div className='swiper-button-next slider-arrow'>
                <SlArrowRightCircle/>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  )
}

export default CodingSlide
