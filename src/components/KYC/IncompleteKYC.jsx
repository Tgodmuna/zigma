import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const IncompleteKYC = () => {
  const [IsShowing, setIsShowing] = useState(false);
  const handleShowing = () => {
    setIsShowing(!false);
  };

  return (
    <div>
      <div
        className={`fixed  top-0 left-[0rem] flex flex-col items-center justify-center w-full h-full bg-opacity-75 bg-gray-900 ${
          IsShowing ? "hidden" : null
        }`}>
        <div className='w-[40vw]  md:w-[vw] bg-white p-[10rem] rounded-lg shadow-lg'>
          <div className='flex-row-reverse  flex justify-between items-center mb-4'>
            <button
              onClick={handleShowing}
              className='text-gray-500 relative -top-[7rem] left-[8rem] hover:text-gray-700 focus:outline-none'>
              <FaTimes size={24} />
            </button>
          </div>
          <div></div>
          <h1 className=' font-sans font-bold text-[rgb(4,16,69)] text-center text-3xl mb-3 capitalize'>
            complete KYC{" "}
          </h1>
          <p className='text-xl w-[31rem] m-auto text-center text-gray-400 font-semibold mb-[3rem] mt-[4rem] '>
            Your KYC is incomplete and therefore you can’t make any transactions
            on this account until you complete it{" "}
          </p>
          <button
            className={` Btn w-[27rem] bg-[rgb(4,16,69)] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none`}>
            goto KYC{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncompleteKYC;
