import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AccountPasswordUpdate = () => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-2 w-full justify-start items-center'>
      <div
        onClick={() => {
          navigate("/dashboard/security");
        }}
        className='relative top-[-26rem] cursor-pointer left-[5rem] flex items-center justify-between '>
        <FaAngleLeft size={40} />{" "}
        <h2 className='text-blue-950 font-mono text-2xl mx-4 '>Back</h2>
      </div>
      <div className='w-[45vw] h-[36rem] bg-white p-4 m-auto mt-10  '>
        <h1 className='text-3xl text-left text-blue-950 font-bold mb-2'>
          Update Password
        </h1>
        <p className='text-gray-600 text-xl text-left mb-[4rem] '>
          Change your old password to a new one.
        </p>
        <form className='mt-4 w-full '>
          <div className='mt-[4rem] text-gray-600 text-xl text-left'>
            <label htmlFor='oldPassword' className=' my-3 block text-gray-600'>
              Old Password
            </label>
            <input
              type='password'
              id='oldPassword'
              className=' h-[3rem] w-full border border-gray-100 p-[33.5px] rounded-md'
            />
          </div>

          <div className='mt-[4rem] text-gray-600 text-xl text-left'>
            <label htmlFor='newPassword' className=' my-3 block text-gray-600'>
              New Password
            </label>
            <input
              type='password'
              id='newPassword'
              className='h-[3rem] w-full border border-gray-100 p-[33.5px] rounded-md'
            />
          </div>

          <button
            type='submit'
            className='bg-blue-950 Btn  text-white py-2 px-4 rounded-md  w-full mt-4'>
            Update Password
          </button>
          <div className='flex items-center justify-center  my-4 '>
            <p className='text-gray-600'>
              Can't remember password{" "}
              <span className='text-xl font-semibold cursor-pointer text-blue-950'>
                <Link to={"hjkhj"}>reset</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPasswordUpdate;


