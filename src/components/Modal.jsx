import React, { useState } from "react";
import storage from "../config/firebase";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import { IoClose } from "react-icons/io5";
import GridModal from "./GridModal";

function Modal({ onClose }) {
  const [select, setSelect] = useState(true);
  const [semester, setSemester] = useState("");
  const [branch, setBranch] = useState("");
  // const [subject, setSubject] = useState("");
  const [pdfs, setPdfs] = useState([]);
  const [folders, setFolders] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const fetchPdfsFromFirebase = async (semester, branch) => {
    const pdfsRef = ref(storage, `pdfs/${semester}/${branch}`);
    const pdfsList = await listAll(pdfsRef);
    const pdfsArray = await Promise.all(
      pdfsList.items.map(async (item) => {
        const pdfRef = ref(storage, item.fullPath);
        const pdfLink = await getDownloadURL(pdfRef);
        return { name: item.name, link: pdfLink };
      })
    );
    setPdfs(pdfsArray);
  };

  const listFolderNames = async (semester, branch) => {
    // setIsDownloading(true);
    const listRef = ref(storage, `pdfs/${semester}/${branch}`);
    const folders = [];

    await list(listRef, { delimiter: "/" }).then((res) => {
      res.prefixes.forEach((folderRef) => {
        folders.push(folderRef.name);
      });
    });

    setFolders(folders);
    // setIsDownloading(false);
  };

  const handleSemesterChange = (e) => {
    setCheck2(true);
    setSemester(e.target.value);
  };

  const handleBranchChange = (e) => {
    setCheck1(true);
    setBranch(e.target.value);
  };

  // const handleSubjectChange = (e) => {
  //   setSubject(e.target.value);
  // };

  const handleSubmit = () => {
    // Call the function to fetch PDFs from Firebase
    // fetchPdfsFromFirebase(semester, branch);
    // setIsDownloading(true);
    listFolderNames(semester, branch);
    // setIsDownloading(false);
  };

  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="mt-10 flex flex-col gap-5 text-white ">
        <button onClick={onClose} className="place-self-end">
          <IoClose size={30} />
        </button>
        <div className="  bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-[20px] items-center mx-4 md:flex-row  h-auto">
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-7">
                <h2 className="text-3xl text font-extrabold">Branches</h2>
              </div>
              <div className="flex flex-col">
                <button
                  onClick={handleBranchChange}
                  value="CSE"
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  CSE
                </button>
                <button
                  onClick={handleBranchChange}
                  value="ECE"
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  ECE
                </button>
                <button
                  onClick={handleBranchChange}
                  value="MEA"
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  MEA
                </button>
                {/* <button
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  MNC
                </button> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-3 ">
              <h2 className="text-center text-3xl text font-extrabold">
                Semester :{" "}
              </h2>
              <div className="flex flex-row gap-3 underline text-gray-200">
                <button value="1" onClick={handleSemesterChange}>
                  1
                </button>
                <button value="2" onClick={handleSemesterChange}>
                  2
                </button>
                <button value="3" onClick={handleSemesterChange}>
                  3
                </button>
                <button value="4" onClick={handleSemesterChange}>
                  4
                </button>
              </div>
            </div>

            {check1 && check2 ? (
              <>
                {handleSubmit()} {/* Call the handleSubmit function */}
                {/* {isDownloading ? (
                  <p>Please Wait</p>
                ) : ( */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <GridModal
                      items={folders}
                      onSelect={() => {
                        setSelect(false);
                        onClose();
                      }}
                    />
                  </div>
                {/* )} */}
              </>
            ) : (
              <div className="mt-5">
                <h2 className="text-center text-3xl text font-extrabold">
                  Select Sem & Branch
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
