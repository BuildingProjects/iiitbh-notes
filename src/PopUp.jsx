import React, { useState } from "react";
import Popup from "reactjs-popup";
function PopUp() {
  return (
    <>
      <div className='flex items-center justify-center w-4rem'>
        <Popup
          trigger={<button className='bg-indigo-500 '> Trigger</button>}
          position='right center'
        >
          <div>Popup content here !!</div>
        </Popup>
      </div>
      <div>
        <div>
            
        </div>
      </div>
    </>
  );
}

export default PopUp;
