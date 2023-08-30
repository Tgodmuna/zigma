import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa";

const BusinessInfo = () => {
  const handleSubmit = () => {
    axios
      .post("kjwkj", [])
      .then((Response) => {
        window.alert(Response);
        console.log(Response);
      })
      .catch((err) => {
        console.log("something was wrong submiting");
        window.alert(err);
      });
  };
  const [state, setstate] = useState({
    businessname: "",
    businessEmail: "",
    cacNumber: "",
    docu: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setstate({ [id]: value });
  };
  return (
    <div className=' flex md:flex-row flex-col p-8 rounded-lg w-full border-none md:m-auto  shadow-md'>
      <Link
        to={"/dashboard/kyc"}
        className='flex cursor-pointer items-start md:relative md:top-[26rem] justify-start mb-[2rem] md:mt-[7rem]'>
        <FaAngleLeft size={40} />
        <p className='text-2xl md:relative -top-[115px] text-[rgb(4,16,60)] text-center text-mono capitalize'>
          back
        </p>
      </Link>
      <div className='address-form  md:p-8 rounded-lg w-full p-4 md:w-[35vw] border-none md:m-auto  shadow-md'>
        <header className='md:text-4xl text-3xl text-center md:text-left text-[rgb(4,16,69)] font-bold mb-4'>
          Business Verification
        </header>
        <p className='text-2xl text-left text-gray-400 font-sans '>
          provide info about your business{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          action=''
          className='flex  flex-col gap-[3rem] items-start justify-start p-[2rem] '>
          <div className=' w-full md:flex-row flex-col flex gap-4'>
            <div className=' w-full flex flex-col gap-3 items-start justify-start'>
              <label
                htmlFor='Business name'
                className='block font-semibold text-xl text-gray-600 mb-2'>
                State
              </label>
              <input
                value={state.businessname}
                onChange={handleChange}
                required
                type='text'
                id='Business name'
                className='w-full px-4 py-3 rounded-xl h-[55px]   border focus:outline-none focus:border-blue-500'
                placeholder='Enter your business name'
              />
            </div>

            <div className='flex w-full flex-col gap-3 items-start justify-start'>
              <label
                htmlFor='Business Email'
                className='  font-semibold text-xl text-gray-600 mb-2'>
                Business Email
              </label>
              <input
                value={state.LGA}
                onChange={handleChange}
                required
                type='text'
                id='LGA'
                className='w-full px-4 py-2 rounded-xl h-[55px]   border focus:outline-none focus:border-blue-500'
                placeholder='Enter your business email'
              />
            </div>
          </div>
          <div className='mb-4 w-full'>
            <label
              htmlFor='Cac number'
              className='block font-semibold text-xl text-gray-600 mb-3 text-left '>
              Cac number
            </label>
            <input
              value={state.cacNumber}
              onChange={handleChange}
              required
              type='text'
              id='cac number'
              className='w-full px-4 py-2 rounded-xl h-[55px]   border focus:outline-none focus:border-blue-500'
              placeholder='Enter your cac number'
            />
          </div>
          <div className='mb-4 w-full'>
            <label
              htmlFor='cac document'
              className='block font-semibold text-xl text-gray-600 mb-3 text-left '>
              {" "}
              cac
            </label>
            <input
              value={state.docu}
              onChange={handleChange}
              required
              accept='.pdf,.doc'
              multiple
              capture='user'
              type='file'
              id='cac document'
              className='w-full px-5 py-2 rounded-xl h-[55px]   border focus:outline-none focus:border-blue-500'
              placeholder='upload Doc'
            />
          </div>
          <button
            type='submit'
            className='bg-[rgb(4,35,69)] Btn w-full text-white px-6 py-2 rounded hover:bg-[rgb(4,50,150)] transition duration-300'>
            <Link to={"/dashboard/KYC"}>done</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessInfo;
