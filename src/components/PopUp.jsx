import React, { useState } from "react";
import Modal from "./Modal";

function PopUp({ onDataSelect }) {
  const [showModal, setShowModal] = useState(false);
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  const handleSemesterSelect = (semester) => {
    setSemester(semester);
  };

  const handleBranchSelect = (branch) => {
    setBranch(branch);
  };

  const handleSubjectSelect = (subject) => {
    setSubject(subject);
    console.log(subject);
    onDataSelect({ semester, branch, subject });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className='flex flex-col items-center gap-6 bg-indigo-800 text-white'>
      <button
        onClick={() => setShowModal(true)}
        className='bg-[#6366F1] px-4 py-2 rounded-lg text-3xl mt-10 w-[240px] font-extrabold height-[100px]'
      >
        {branch === "" ? (
          <div>Select Your Semester</div>
        ) : (
          <div>{branch + "-" + subject}</div>
        )}
      </button>
      {showModal && (
        <Modal
          onClose={handleClose}
          onSemesterSelect={handleSemesterSelect}
          onBranchSelect={handleBranchSelect}
          onSubjectSelect={handleSubjectSelect}
        />
      )}
    </div>
  );
}

export default PopUp;
