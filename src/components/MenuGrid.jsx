import React from "react";

function MenuGrid({ items }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-4'>
      {items.map((item, index) => (
        <div
          key={index}
          className='bg-white rounded-md shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out'
        >
          <h5 className='text-lg font-bold'>{item.label}</h5>
          <p className='text-sm text-gray-600'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MenuGrid;
