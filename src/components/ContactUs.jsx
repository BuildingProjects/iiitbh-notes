import Lottie from "lottie-react";
import React from "react";
import contactAnimation from "../assets/ContactAnimation.json";
import FollowUs from "./FollowUs";
function ContactUs() {
  return (
    <>
      <div className='bg-white flex justify-center flex-wrap-reverse sm:flex-wrap-reverse md:flex-nowrap lg:flex-nowrap xl:flex-nowrap mt-7 mb-11 p-11'>
        {/* <div className='flex-col items-center justice-center w-[27rem]'> */}
        <div className='flex-col items-center justice-center w-[27rem] sm:w-[50rem]  md:70rem'>
          <div className='flex items-center justify-center'>
            <h2 className='items-center text-[#6366F1] font-bold text-7xl m-6 pb-6'>
              Contact Us
            </h2>
          </div>
          <form className='lg:w-[35rem] sm:w-[100%] mx-auto'>
            <div className='mb-5'>
              <label
                for='text'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Name
              </label>
              <input
                type='text'
                id='Name'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='Enter Your Name'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                for='email'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
                placeholder='name@flowbite.com'
                required
              />
            </div>
            <div className='mb-5'>
              <label
                for='message'
                class='block mb-2 text-lg font-medium text-gray-900'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='4'
                class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <div className='flex items-center mb-5'>
              <div className='flex items-center h-5'>
                <input
                  id='terms'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                  required
                />
              </div>
              <label
                for='terms'
                className='ms-2 text-lg font-medium text-gray-900'
              >
                I agree with the{" "}
                <a
                  href='#'
                  className='text-blue-600 hover:underline dark:text-blue-500'
                >
                  terms and conditions
                </a>
              </label>
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.5rem] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              w-[9rem]'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <Lottie loop={true} animationData={contactAnimation} />
      </div>
      <FollowUs />
    </>
  );
}

export default ContactUs;
