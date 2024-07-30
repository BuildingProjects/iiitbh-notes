import React from "react";

function GridModal({ items }) {
  return (
    <div>
      
      {items.map((item, index) => (
        <div key={index}>
        <button
        type="button"
        class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
      >
        {item.label}
      </button>
      </div>
      ))}
    </div>
  );
}

export default GridModal;
