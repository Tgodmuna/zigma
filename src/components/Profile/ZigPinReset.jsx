import React from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ZigPinReset = () => {
    const navigate = useNavigate();

  return (
    <div className='flex md:flex-row flex-col  md:w-full md:justify-start justify-center items-center'>
      <div
        onClick={() => {
          navigate("/dashboard/security");
        }}
        className=' cursor-pointer relative top-[-26rem] left-[5rem] flex items-center justify-between '>
        <FaAngleLeft size={40} />{" "}
        <h2 className='text-blue-950 font-mono text-2xl mx-4 '>Back</h2>
      </div>
      <div className='md:w-[45vw] md:h-[56rem] h-[90vw] w-[100vw] bg-white p-4 m-auto mt-10  '>
        <h1 className='text-3xl text-center md:text-left text-blue-950 font-bold mb-2'>
          Update pin
        </h1>
        <p className='text-gray-600 text-xl text-center md:text-left mb-[4rem] '>
          Change or reset your ziga pin .
        </p>
        <form className='mt-4 w-full h-fit  '>
          <div className='mt-[4rem] text-gray-600 text-xl text-left'>
            <label
              htmlFor='oldpin'
              className=' capitalize my-3 block text-gray-600'>
              Old ziga pin
            </label>
            <input
              type='pin'
              id='oldpin'
              className=' h-[3rem] w-full border border-gray-100 p-[33.5px] rounded-md'
            />
          </div>
          <div className='mt-[4rem] text-gray-600 text-xl text-left'>
            <label
              htmlFor='newpin'
              className=' capitalize my-3 block text-gray-600'>
              New ziga pin
            </label>
            <input
              type='pin'
              id='newpin'
              className='h-[3rem] w-full border border-gray-100 p-[33.5px] rounded-md'
            />
          </div>

          <div className='mt-[4rem] text-gray-600 text-xl text-left'>
            <label
              htmlFor='ConfirmPin'
              className=' capitalize my-3 block text-gray-600'>
              confirm ziga pin
            </label>
            <input
              type='ComfirmPin'
              id='newpin'
              className='h-[3rem] w-full border border-gray-100 p-[33.5px] rounded-md'
            />
          </div>
          <button
            onClick={()=>alert('pin reset successfully')}
            type='submit'
            className='bg-blue-950 Btn  text-white py-2 px-4 rounded-md  w-full mt-4'>
            Update pin
          </button>
          <div className='flex items-center justify-center  my-12 '>
            <p className='text-gray-600'>
              Can't remember pin{" "}
              <span className='text-xl font-semibold cursor-pointer text-blue-950'>
                <a href='jsjks'>reset</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ZigPinReset