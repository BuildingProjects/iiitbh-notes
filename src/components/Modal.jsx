import React from "react";
import { IoClose } from "react-icons/io5";
import MenuGrid from "./MenuGrid";
function Modal({ onClose }) {
  const items = [
    { label: "Item 1", description: "This is item 1" },
    { label: "Item 2", description: "This is item 2" },
    { label: "Item 3", description: "This is item 3" },
    { label: "Item 4", description: "This is item 4" },
    { label: "Item 5", description: "This is item 5" },
    { label: "Item 6", description: "This is item 6" },
  ];
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="mt-10 flex flex-col gap-5 text-white ">
        <button onClick={onClose} className="place-self-end">
          <IoClose size={30} />
        </button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 md:flex-row gap-20 h-auto">
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="mb-7">
              <h2 className="text-3xl text font-extrabold">Branches</h2>
              </div>
              <div className="flex flex-col">
                <button
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  CSE
                </button>
                <button
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  ECE
                </button>
                <button
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  MEA
                </button>
                <button
                  type="button"
                  class="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-[15.5rem]"
                >
                  MNC
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row gap-3 ">
              <h2 className="text-center text-3xl text font-extrabold">Semester : </h2>
              <div className="flex flex-row gap-3 underline text-gray-200">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl text font-extrabold py-5">Subjects</h2>
              <MenuGrid items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
