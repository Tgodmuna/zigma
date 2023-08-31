import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const KYC_requestCard = ({ showDashBoardOutlet }) => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-50 flex  border-[2px] md:w-[50vw] gap-2 md:mr-[24rem] md:gap-10 border-slate-200 my-[2rem] rounded-lg md:p-[5rem] md:mx-0  shadow-xl  mx-[14px] p-[1rem] '>
      <div className='md:flex hidden items-start'>
        <FaArrowUp size={40} className='text-black' />
      </div>
      {/* mobile */}
      <div className='flex md:hidden items-start'>
        <FaArrowUp size={35} className='text-black' />
      </div>

      <div className=' flex flex-col items-start cursor-pointer justify-start  mb-4'>
        <h2
          onClick={() => {
            navigate("/dashboard/kyc");
            showDashBoardOutlet();
          }}
          className='text-xl hover:text-2xl cursor-pointer text-[rgb(4,16,60)] font-bold'>
          Verify Your Account
        </h2>
        <p className='text-black md:text-left text-justify '>
          Click here to complete your KYC process and verify your Ziga account
          so you can transact with it.
        </p>
      </div>
    </div>
  );
};

export default KYC_requestCard