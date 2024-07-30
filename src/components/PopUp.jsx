import React, { useState } from "react";
import Modal from "./Modal";

function PopUp() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='flex flex-col items-center gap-6 bg-indigo-800 text-white'>
      <button
        onClick={() => setShowModal(true)}
        className='bg-[#6366F1] px-4 py-2 rounded-lg text-3xl mt-10 w-[240px] font-extrabold height-[100px]'
      >
        Select Your Semester
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default PopUp;
