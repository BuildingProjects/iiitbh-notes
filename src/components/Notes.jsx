import React, { useState } from "react";
import PopUp from "./PopUp";
import HorizontalScrollMenu from "./HorizontalScrollMenu";
import MenuGrid from "./MenuGrid";
import storage from "../config/firebase";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";
import LoadingAnimation from "../assets/LoadingAnimation.json";
import Lottie from "lottie-react";

function Notes() {
  const [pdfs, setPdfs] = useState([]);
  const [type, setType] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const items = [];
  const fetchPdfsFromFirebase = async (semester, branch, subject, type) => {
    setIsLoading(true);
    const pdfsRef = ref(
      storage,
      `pdfs/${semester}/${branch}/${subject}/${type}`
    );
    const pdfsList = await listAll(pdfsRef);
    const pdfsArray = await Promise.all(
      pdfsList.items.map(async (item) => {
        const pdfRef = ref(storage, item.fullPath);
        const pdfLink = await getDownloadURL(pdfRef);
        return { name: item.name, link: pdfLink };
      })
    );
    setPdfs(pdfsArray);
    setIsLoading(false);
  };

  const handleDataSelect = (data) => {
    setSelectedData(data);
  };

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    fetchPdfsFromFirebase(
      selectedData.semester,
      selectedData.branch,
      selectedData.subject,
      selectedType
    );
  };

  return (
    <>
      <div className='bg-indigo-800 flex-col items-center '>
        <div>
          <div className='pt-4'>
            <PopUp onDataSelect={handleDataSelect} />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[70%] flex-col gap-8'>
            <div>
              <HorizontalScrollMenu items={items} onSelect={handleTypeSelect} />
            </div>
            {isLoading ? (
              <div className='flex justify-center items-center'>
                <Lottie
                  className='w-[30rem]'
                  loop={true}
                  animationData={LoadingAnimation}
                />
              </div>
            ) : (
              <div className='mb-5 mt-7'>
                <MenuGrid items={pdfs} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
