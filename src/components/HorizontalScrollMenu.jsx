import React from "react";

function HorizontalScrollMenu({onSelect}) {
  const handleTypeSelect = (type) => {
    onSelect(type);
  };


  return (
    <div className='mx-auto mt-10 flex w-4/5 gap-[8rem] overflow-x-scroll costom-scrollbar scrollbar-webkit text-lg font-light text-white/50 sm:justify-center md:w-full md:px-0'>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px] hover:underline underline-offset-8'
      onClick={() => handleTypeSelect("Syllabus")}>
        Syllabus
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px] hover:underline underline-offset-8'
      onClick={() => handleTypeSelect("Books")}>
        Books
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px] hover:underline underline-offset-8'
      onClick={() => handleTypeSelect("Notes")}>
        Notes
      </button>
      <button className='font-medium text-white text-[1.6rem] leading-[2rem] p-[7px] hover:underline underline-offset-8'
      onClick={() => handleTypeSelect("PYQ")}>
        PYQ
      </button>
    </div>
  );
}

export default HorizontalScrollMenu;
