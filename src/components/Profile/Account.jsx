import React, { useState } from "react";
import { Security } from "./Security";
const Account = () => {
  const [tab, settab] = useState("active");
  
  return (
    <>
        <div className='flex flex-col justify-start m-[4rem]  items-start w-full gap-[1rem]'>
          <h1 className='text-3xl my-[2rem] font-sans font-bold text-gray-300 text-left capitalize'>
            account
          </h1>
          <div className='flex gap-4 p-2rem text-center items-center justify-center'>
            <img
              alt='avater'
              name='image'
              id=''
              className='h-[6rem] w-[6rem] rounded-full bg-gray-200 text-center  '
            />
            <p className='font-mono font-bold text-4xl uppercase'>Thankgod</p>
          </div>
          <div className='flex flex-row gap-[4rem] p-8  w-[40%]'>
            <div className='mb-4 w-full justify-start flex flex-col gap-6'>
              <label className='font-light text-xl text-left text-slate-400'>
                Firstname{" "}
              </label>
              <input
                className='border p-[1.5rem] w-full rounded-md'
                type='tel'
                placeholder='Phone Number'
              />
            </div>

            <div className='mb-4 w-full justify-start flex flex-col gap-6'>
              <label className='font-light text-xl text-left text-slate-400'>
                lastname{" "}
              </label>
              <input
                className='border p-[1.5rem] w-full rounded-md'
                type='tel'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='flex flex-col gap-[4rem] p-8  w-[40%]'>
            <div className='mb-4 w-full justify-start flex flex-col gap-6'>
              <label className='font-light text-xl text-left text-slate-400'>
                Phone Number
              </label>
              <input
                className='border p-[1.5rem] w-full rounded-md'
                type='tel'
                placeholder='Phone Number'
              />
            </div>
            <div className='mb-4 justify-start flex flex-col gap-6'>
              <label className='font-light  text-left text-xl text-slate-400'>
                Email Address
              </label>
              <input
                className='border p-[1.5rem] w-full rounded-md'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <button className='bg-blue-950 Btn text-white py-2 px-4 rounded-md'>
              save
            </button>
          </div>
        </div>
    </>
  );
};

export default Account;
