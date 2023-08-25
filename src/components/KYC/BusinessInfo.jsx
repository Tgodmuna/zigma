import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className='address-form mt-[10rem] p-8 rounded-lg w-[35vw] border-none m-auto  shadow-md'>
      <header className='text-4xl text-left text-[rgb(4,16,69)] font-bold mb-4'>
        Business Verification
      </header>
      <p className='text-2xl text-left text-gray-400 font-sans '>
        provide info about your business{" "}
      </p>
      <form
        onSubmit={handleSubmit}
        action=''
        className='flex  flex-col gap-[3rem] items-start justify-start p-[2rem] '>
        <div className=' w-full flex gap-4'>
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
              className='block font-semibold text-xl text-gray-600 mb-2'>
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
          <Link to={"KYC"}>done</Link>
        </button>
      </form>
    </div>
  );
};

export default BusinessInfo;
