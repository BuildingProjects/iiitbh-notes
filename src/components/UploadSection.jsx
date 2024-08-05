import React from 'react'
import Lottie from 'lottie-react';
import animation from '../assets/upload.json';

function UploadSection() {
  return (
    <div class="container pb-0 mb-0">

    <div className='mt-[50px] pb-0 mb-0 justify-center items-center '>

        <div className="container mx-auto flex px-5 py-24 flex-col items-center text-center">
            
            <h2 className="sm:text-5xl md:text-5xl lg:text-6xl mb-4 font-medium text-[#6366F1] text-center text-[x-large]">Ready to Contribute Upload your notes here</h2>

            <div className='flex flex-wrap items-center justify-center w-[50%]'>
            <p className='text-gray-400 items-center text-wrap leading-relaxed justify-center text-center mt-10 mb-10'>Hey students! Do you have well-organized notes that could help your peers succeed? Share your valuable insights and contribute to our college notes website! By uploading your notes, you’re not just helping others—you're building a collaborative learning environment. Your contributions can make a big difference in someone’s academic journey. Thank you for being a part of this amazing community! 📚✨</p>


            <a href="https://forms.gle/oGi2uW44edGr8RSz7" target='_blank'>
                <button className="mx-auto assignment  inline-flex text-white border-0 py-2 px-6 focus:outline-2px btnslide rounded get_started_btn">Upload</button>
            </a>


            <div className='container mt-10'><Lottie loop={true} animationData={animation}/></div>
            </div>
            
        </div>


    </div>
    </div>
  )
}

export default UploadSection
