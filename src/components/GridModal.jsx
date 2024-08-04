import React from "react";

// const handleDownload = (link, filename) => {
//   const a = document.createElement('a');
//   a.href = link;
//   a.download = filename;
//   a.target = "_blank";
//   a.click();
// };

function GridModal({ items , onSelect}) {
  
  return (
    <div>
      
      {items.map((item, index) => (
        <div key={index}>
        <button
        type="button"
        class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
        // onClick={() => handleDownload(item.link, item.name + '.pdf')}
        onClick={() => onSelect(item)}
      >
        {item}
      </button>
      </div>
      ))}
    </div>
  );
}

export default GridModal;
