import React from "react";
import { PiBooksDuotone } from "react-icons/pi";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer className="bg-[#6366FF]">
        <div className="mx-auto w-full max-w-screen-xl md:p-[7rem] p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-[3.5rem] md:mb-0">
              <a href="#home" className="flex items-center">
                <div className="text-white flex gap-2 hover:">
                  <PiBooksDuotone className="size-12 h-[4rem]" />
                  <a href="/">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                      IIITBH NOTES
                    </span>
                  </a>
                </div>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-[19.5rem] sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-2xl font-bold uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a href="/Notes" className="hover:underline">
                      Class Notes
                    </a>
                  </li>
                  <li>
                    <a href="/Coding" className="hover:underline">
                      Coding
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold uppercase dark:text-white">
                  Follow Us
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/iiitbh_notes/"
                      className="hover:underline"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/+8EGaWV-IdekwYjk9"
                      className="hover:underline"
                      target="_blank"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold uppercase dark:text-white">
                  REACH OUT
                </h2>
                <ul className="text-white font-medium">
                  <li className="mb-4">
                    <a
                      href="mailto:iiitbhnotes@gmail.com"
                      className="hover:underline"
                    >
                      Mail Us
                    </a>
                  </li>
                  <li>
                    <a href="/Contact" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-white sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center  sm:justify-between ">
            <span className="text-2xl text-white sm:text-center">
              ©{currentYear}{" "}
              <a href="/" className="hover:underline">
                IIITBH NOTES™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 ">
              <a
                href="https://www.instagram.com/iiitbh_notes/"
                className="text-white hover:text-gray-900  ms-5"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.162c3.26 0 3.63.012 4.91.071a6.942 6.942 0 0 1 2.2.46 4.293 4.293 0 0 1 2.804 2.804 6.94 6.94 0 0 1 .46 2.2c.059 1.28.071 1.65.071 4.91s-.012 3.63-.071 4.91a6.94 6.94 0 0 1-.46 2.2 4.293 4.293 0 0 1-2.804 2.804 6.942 6.942 0 0 1-2.2.46c-1.28.059-1.65.071-4.91.071s-3.63-.012-4.91-.071a6.942 6.942 0 0 1-2.2-.46 4.293 4.293 0 0 1-2.804-2.804 6.94 6.94 0 0 1-.46-2.2C2.174 15.01 2.162 14.64 2.162 12s.012-3.63.071-4.91a6.94 6.94 0 0 1 .46-2.2A4.293 4.293 0 0 1 5.237 4.75a6.942 6.942 0 0 1 2.2-.46c1.28-.059 1.65-.071 4.91-.071zM12 0C8.741 0 8.33.012 7.06.07a9.934 9.934 0 0 0-3.114.655 6.716 6.716 0 0 0-4.356 4.356A9.934 9.934 0 0 0 0 7.06C.012 8.33 0 8.741 0 12s.012 3.63.071 4.91a9.934 9.934 0 0 0 .655 3.114 6.716 6.716 0 0 0 4.356 4.356 9.934 9.934 0 0 0 3.114.655C8.33 23.988 8.741 24 12 24s3.63-.012 4.91-.071a9.934 9.934 0 0 0 3.114-.655 6.716 6.716 0 0 0 4.356-4.356 9.934 9.934 0 0 0 .655-3.114C24.012 15.63 24 15.22 24 12s-.012-3.63-.071-4.91a9.934 9.934 0 0 0-.655-3.114 6.716 6.716 0 0 0-4.356-4.356A9.934 9.934 0 0 0 16.91.07C15.63.012 15.22 0 12 0zM12 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zm0 10.06a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zm4.48-8.56a1.308 1.308 0 1 1-2.617 0 1.308 1.308 0 0 1 2.617 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="sr-only">Instagram</span>
              </a>
              
              <a
                href="https://github.com/BuildingProjects/iiitbh-notes"
                className="text-white hover:text-gray-900 ms-5"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
          <a href="/About">
            <div className="sm:text-center flex flex-col justify-center text-left text-white font-extrabold text-4xl pt-5 hover:text-gray-900 ms-5">
              Made By : Ankur & Roshan
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
