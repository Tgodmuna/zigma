import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

const ZigPinReset = () => {
  return (
    <div className='flex  w-full justify-start items-center'>
      <div className='relative top-[-14rem] left-[5rem] flex items-center justify-between '>
        <FaAngleLeft size={40} />{" "}
        <h2 className='text-blue-950 font-mono text-2xl mx-4 '>Back</h2>
      </div>
      <div className='w-[45vw] h-[36rem] bg-white p-4 m-auto mt-10  '>
        <h1 className='text-3xl text-left text-blue-950 font-bold mb-2'>
          Update pin
        </h1>
        <p className='text-gray-600 text-xl text-left mb-[4rem] '>
          Change or reset your ziga pin .
        </p>
        <form className='mt-4 w-full '>
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
            type='submit'
            className='bg-blue-950 Btn mt-12 text-white py-2 px-4 rounded-md  w-full mt-4'>
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