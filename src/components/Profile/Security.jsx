import React from "react";
import {FaAngleRight} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Security = () => {
    return (
      <div className='m-auto'>
        <div className="m-auto" >
          <h1 className=' text-3xl md:text-6xl my-[3rem] m-auto  font-sans font-bold text-gray-400 text-center capitalize'>
            security{" "}
          </h1>{" "}
        </div>

        <Card
          header='update password'
          title='change you old password to a new one'
          path='/dashboard/passwordUPDATE'
          backPath={'dashboard/passwordUPDATE'}

        />
        <Card
          header={"update pin"}
          path='/dashboard/pinReset'
          title={ "change or reset your zigi pin" }
        />
      </div>
    );
};

const Card = ({ header, title, path ,backPath }) => {
  const navigate = useNavigate();
    return (
      <div
        onClick={() => {
          navigate(path);
        }}
        className='cursor-pointer mb-[3rem] md:mb-7 mt-7 md:m-auto hover:bg-slate-50 bg-slate-200 my-[2rem ]  p-4 justify-between items-center m-3 md:w-[40vw] h-[13vh] rounded-md shadow-md flex'>
        <div className='flex  items-start flex-col '>
          <h1 className='text-3xl text-blue-95 capitalize font-bold mb-2'>
            {header}
          </h1>
          <p className='text-xl capitalize text-gray-600'>{title}</p>
        </div>
        <FaAngleRight className=' text-gray-600 mt-2' size={64} />
      </div>
    );
};
export {
    Card,
    Security
};