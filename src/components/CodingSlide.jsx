import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image1 from "../assets/IIITlogo.png";
import slide_image2 from "../assets/IIITlogo.png";
import slide_image3 from "../assets/IIITlogo.png";
import slide_image4 from "../assets/IIITlogo.png";
import slide_image5 from "../assets/IIITlogo.png";

function CodingSlide() {
  return (
    <div className='container'>
      <h1 className='heading font-bold text-blue-500 underline underline-offset-8'>
        Coding Source
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src={slide_image1}
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='p-4 md:w-[100%] img aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
            data-aos-delay='10'
          >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'>
              <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo">
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                alt='Graph Serie'
              />
              </a>
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-blue-500 mb-3">C Language</h1>
                <hr />
                <br />
                <p className="leading-relaxed mb-3">
                C is a powerful and versatile programming language that can be used to develop a wide variety of software. It is a good choice for beginners.
                </p>
              <div className="flex items-center flex-wrap">
                <a href="https://www.youtube.com/watch?v=irqbmMNs2Bo" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <GoArrowRight/>
                </a>
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <SlArrowLeftCircle />
          </div>
          <div className='swiper-button-next slider-arrow'>
            <SlArrowRightCircle />
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
}

export default CodingSlide;
