import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Security = () => {
  return (
    <div className="m-[3rem]">
      <h1>
        <h1 className='text-3xl m-[2rem]  font-sans font-bold text-gray-400 text-left capitalize'>
          security{" "}
        </h1>{" "}
      </h1>
      <Card
        header='update password'
        title='change you old password to a new one'
          />
          
          <Card header={'update pin'} title={'change or reset your zigi pin'} />
    </div>
  );
};


const Card = ({ header, title }) => {
  return (
    <div className=' bg-slate-200 my-[2rem ] m-[2rem] p-4 justify-between items-center w-[40vw] h-[13vh] rounded-md shadow-md flex'>
      <div className='flex  items-start flex-col '>
        <h1 className='text-3xl text-blue-95 capitalize font-bold mb-2'>
          {header}
        </h1>
        <p className='text-xl capitalize text-gray-600'>{title}</p>
      </div>
      <FaAngleRight className='text-gray-600 mt-2' size={24} />
    </div>
  );
};
export { Card, Security };