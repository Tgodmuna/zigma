import React from "react";
import { FaArrowUp } from "react-icons/fa";


const KYC_requestCard = () => {
  return (
    <div className='bg-slate-200 flex  border-[2px] w-[50vw] gap-10 border-slate-200 my-[2rem] rounded-lg p-[5rem] shadow-xl '>
      <div className='flex items-start'>
        <FaArrowUp size={40} className='text-black' />
      </div>
      <div className='flex flex-col items-start justify-start  mb-4'>
        <h2 className='text-xl text-[rgb(4,16,60)] font-bold'>
          Verify Your Account
        </h2>
        <p className='text-black '>
          Click here to complete your KYC process and verify your Ziga account
          so you can transact with it.
        </p>
      </div>
    </div>
  );
};

export default KYC_requestCard