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

function CodingSlide() {
  return (
    <div className='bg-[#6366F1]'>
      <div className="bg-[#6366F1]">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' clasName='w-[83rem] ml-[-50px] mt-[-44px] absolute'>
        <path
          fill='#fff'
          fill-opacity='1'
          d='M0,96L60,133.3C120,171,240,245,360,256C480,267,600,213,720,165.3C840,117,960,75,1080,80C1200,85,1320,139,1380,165.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>
      </div>
      <h1 className='heading font-bold text-white underline underline-offset-8 'data-aos='zoom-in-down'>
        Coding Resources
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
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden Free_course_card'
            >
              <a href='https://www.youtube.com/watch?v=irqbmMNs2Bo'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/irqbmMNs2Bo/maxresdefault.jpg'
                  alt='C'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  C Language
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=irqbmMNs2Bo'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=EAR7De6Goz4'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/EAR7De6Goz4/maxresdefault.jpg'
                  alt='C++'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  C++ Language
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=EAR7De6Goz4'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/37E9ckMDdTk/maxresdefault.jpg'
                  alt='Graph Serie'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  Array Playlist
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=37E9ckMDdTk&list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/tVzUXW6siu0/maxresdefault.jpg'
                  alt='Graph Serie'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  Web Development
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=tVzUXW6siu0&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=M3_pLsDdeuU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/M3_pLsDdeuU/maxresdefault.jpg'
                  alt='Graph Serie'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  Graph
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=M3_pLsDdeuU&list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                   <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/7wnove7K-ZQ/maxresdefault.jpg'
                  alt='Graph Serie'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  Python Language
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap'>
                  <a
                    href='https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
              <a href='https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center fitImg'
                  src='https://i3.ytimg.com/vi/yRpLlJmRo2w/maxresdefault.jpg'
                  alt='Graph Serie'
                />
              </a>
              <div className='p-6 bg-white'>
                <h1 className='title-font text-lg font-medium text-blue-500 mb-3'>
                  Java Language
                </h1>
                <hr />
                <br />
                <p className='leading-relaxed mb-3'>
                  C is a powerful and versatile programming language that can be
                  used to develop a wide variety of software. It is a good
                  choice for beginners.
                </p>
                <div className='flex items-center flex-wrap gap-3 mt-3'>
                  <a
                    href='https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop'
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  >
                    <div className="flex gap-1">
                    <p>Learn More</p>
                    <div className="flex items-center mt-[5px]"><GoArrowRight /></div>
                    </div>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,202.7C480,192,600,128,720,90.7C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  );
}

export default CodingSlide;
