import React from "react";

function HorizontalScrollMenu() {
  return (
    <div className='mx-auto mt-10 flex w-4/5 gap-[8rem] overflow-x-scroll costom-scrollbar scrollbar-webkit text-lg font-light text-white/50 sm:justify-center md:w-full md:px-0'>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px]'>
        Syllabus
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px]'>
        Books
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px]'>
        Notes
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px]'>
        Papers
      </button>
    </div>
  );
}

export default HorizontalScrollMenu;
