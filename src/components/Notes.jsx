import React, { useState } from "react";
import PopUp from "./PopUp";
import HorizontalScrollMenu from "./HorizontalScrollMenu";
import MenuGrid from "./MenuGrid";
import storage from "../config/firebase";
import { ref, listAll, getDownloadURL, list } from "firebase/storage";

function Notes() {
  const [pdfs, setPdfs] = useState([]);
  const [type, setType] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const items1 = [
    { label: "Item 1", description: "This is item 1" },
    { label: "Item 2", description: "This is item 2" },
    { label: "Item 3", description: "This is item 3" },
    { label: "Item 4", description: "This is item 4" },
    { label: "Item 5", description: "This is item 5" },
    { label: "Item 6", description: "This is item 6" },
  ];
  const items = [
    { label: "Item 1", description: "This is item 1" },
    { label: "Item 2", description: "This is item 2" },
    { label: "Item 3", description: "This is item 3" },
    { label: "Item 4", description: "This is item 4" },
    { label: "Item 5", description: "This is item 5" },
    { label: "Item 6", description: "This is item 6" },
  ];

  const fetchPdfsFromFirebase = async (semester, branch, subject, type) => {
    const pdfsRef = ref(storage, `pdfs/${semester}/${branch}/${subject}/${type}`);
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

  const handleDataSelect = (data) => {
    setSelectedData(data);
  };

  const handleTypeSelect = (selectedType) => {
    setType(selectedType);
    fetchPdfsFromFirebase(selectedData.semester , selectedData.branch , selectedData.subject , type);
  };
  
  return (
    <>
      <div className='bg-indigo-800 flex-col items-center '>
        <div>
          <div className='pt-4'>
            <PopUp onDataSelect={handleDataSelect}/>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[70%] flex-col gap-8'>
            <div>
              <HorizontalScrollMenu items={items} onSelect={handleTypeSelect}/>
            </div>
            <div className='mb-5 mt-7'>
              <MenuGrid items={pdfs} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
