import React, { useEffect, useRef } from 'react'
import svg from './../assets/hero.svg'
import './style.css'
import { TypeAnimation } from 'react-type-animation';
import animation from './heroAnimation.json';
import Lottie from 'lottie-react';

function Hero() {
  return (
      <section className='text-gray-600 body-font header align-items center items-center font-bold'>
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items center">
      
      {/* div for image */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 ml-[3.7rem] md:mb-0" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000" data-aos-delay="200">
      <Lottie loop={true} animationData={animation}/>
      </div>

      {/* div for content */}

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 lg:pt-16 md:pl-16  flex flex-col md:items-start md:text-left items-center text-center">

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Class Notes',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Previous Year Questions',
        1000,
        'Coding Assistance',
        1000,
        'Ace Your Studies with Our Resources',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.2em' }}
      repeat={Infinity}
    />
        <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
        </h1>
        <p className="mb-8 leading-relaxed">
        Welcome to IIIT's Study Hub! Elevate your learning experience with instant access to a treasure trove of downloadable notes, past year questions, and coding assistance. Whether you’re gearing up for exams or diving into a challenging project, our platform is designed to support your academic journey every step of the way. Explore, download, and conquer your coursework with confidence. Your success starts here! 
          </p>
          
          
          <div className="flex justify-center buttonbox">
            <a href="#learn"><button className="flex mx-auto assignment  inline-flex text-white border-0 py-2 px-6 focus:outline-2px btnslide rounded get_started_btn">Learn</button></a>
            
            <a href="#classNOtes"><button className="flex  mx-auto classnote text-gray-500 inline-flex  py-2 px-6  btnslide rightslide rounded colouredText">Notes</button></a>
            
          </div>
          
          
      </div>



      </div>
      </section>
  )
}

export default Hero
