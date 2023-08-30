import React from "react";
import { FaTimes } from "react-icons/fa";

const VerifyPaymentCard = ({ username, accountName, accountNumber, onClose }) => {
  return (
    <div className='fixed  top-0 left-[0rem] flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-900'>
      <div className='w-[50vw] md:w-[vw] bg-white p-8 rounded-lg shadow-lg'>
        <div className='flex-row-reverse  flex justify-between items-center mb-4'>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 focus:outline-none'>
            <FaTimes size={24} />
          </button>
        </div>
        <h1 className=' font-sans font-bold text-[rgb(4,16,69)] text-center text-3xl mb-3 capitalize'>
          bank transfer
        </h1>
        <p className='text-xl text-gray-400 font-semibold mb-[2rem] '>Send Money to Bank Account details below</p>

        <div className='flex flex-col items-start justify-start m-auto gap-4 '>
          <p className='text-lg mb-4'>User Name: {username}</p>
          <p className='text-lg mb-4'>Account Name: {accountName}</p>
          <p className='text-lg mb-4'>Account Number: {accountNumber}</p>
        </div>
        <button className='bg-[rgb(4,16,69)] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none'>
          Send Money
        </button>
      </div>
    </div>
  );
};

export default VerifyPaymentCard;
