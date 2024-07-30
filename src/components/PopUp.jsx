import React, { useState } from "react";
import Modal from "./Modal";

function PopUp() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='flex flex-col items-center gap-6 bg-indigo-800 text-white'>
      <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
      <button
        onClick={() => setShowModal(true)}
        className='bg-violet-500 px-4 py-2 rounded-lg text-lg'
      >
        Select Your Notes
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default PopUp;
