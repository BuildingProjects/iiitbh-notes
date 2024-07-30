import React, { useState } from "react";
import PopUp from "./PopUp";
import HorizontalScrollMenu from "./HorizontalScrollMenu";
import MenuGrid from "./MenuGrid";

function Notes() {
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
  return (
    <>
      <div className='bg-indigo-800 flex-col items-center '>
        <div>
          <div className='pt-4'>
            <PopUp />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[70%] flex-col gap-8'>
            <div>
              <HorizontalScrollMenu items={items} />
            </div>
            <div className='mb-5 mt-7'>
              <MenuGrid items={items1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
