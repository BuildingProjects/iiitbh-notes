import React from "react";
import { IoClose } from "react-icons/io5";
function Modal({ onClose }) {
  return (
    <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div className='mt-10 flex flex-col gap-5 text-white'>
        <button onClick={onClose} className='place-self-end'>
          <IoClose size={30} />
        </button>
        <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'></div>
      </div>
    </div>
  );
}

export default Modal;
