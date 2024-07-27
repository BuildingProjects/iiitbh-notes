import React from 'react'
import svg from './../assets/hero.svg'
import './style.css'
import { TypeAnimation } from 'react-type-animation';


function Hero() {
  return (
      <section className='text-gray-600 body-font header align-items center items-center font-bold'>

      <div className="container mx-auto flex items-center px-5 py-24 flex-col md:flex-row">
      
      {/* div for image */}

      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>

      <img src={svg} alt="svg hero" className='object-cover object-center rounded device-width'/>

      </div>

      {/* div for content */}

      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">


      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">
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
        <span class="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
        </h1>


        <p class="mb-8 leading-relaxed">
        Welcome to IIIT BH's Study Hub! Elevate your learning experience with instant access to a treasure trove of downloadable notes, past year questions, and coding assistance. Whether you’re gearing up for exams or diving into a challenging project, our platform is designed to support your academic journey every step of the way. Explore, download, and conquer your coursework with confidence. Your success starts here! 
          </p>
          
          
          <div class="flex justify-center buttonbox">
            <a href="#learn"><button class="flex mx-auto assignment  inline-flex text-white border-0 py-2 px-6 focus:outline-2px btnslide rounded text-lg get_started_btn">Learn</button></a>
            
            <a href="#classNOtes"><button class="flex  mx-auto classnote text-gray-500 inline-flex  py-2 px-6  btnslide rightslide rounded colouredText">Notes</button></a>
            
          </div>
          
          
      </div>



      </div>
      </section>
  )
}

export default Hero
