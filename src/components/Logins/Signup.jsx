import React, { useContext, useState } from "react";
import { AllContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUP = () => {
  const Navigate = useNavigate();
  const store = useContext(AllContext);
  const { logo, LandingPageImages } = store;
  return (
    <div className='flex w-full flex-row'>
      <div className='right bg-gray-50 w-[50%] mr-[15rem] h-full flex gap-[33rem] justify-center items-center flex-col  '>
        <div className='  flex gap-[3rem] flex-col justify-start items-start '>
          <img src={logo} alt='ziga logo' className='rounded-3xl w-[5rem] ' />
          <p className='font  mb-[1rem] text-3xl text-neutral-900 capitalize font-sans font-bold '>
            move money across different
          </p>
          <p className='font -mt-[3rem] text-3xl text-neutral-900 capitalize font-sans font-bold '>
            countries swiftly & securely
          </p>
        </div>

        <div>
          <img
            className='w-[10rem]'
            src={LandingPageImages.image2}
            alt='dollar bag'
          />
        </div>
      </div>

      <div className='left w-[50%] flex flex-col items-start '>
        <div className='p-[2rem] mb-[10px] flex flex-col gap-2 text-justify'>
          <h1 className='text-2xl font-bold capitalize font-serif text-[rgb(4,16,61] '>
            create Account
          </h1>
          <p className='capitalize text-xl '>use your personal information</p>
        </div>

        <form action='' className=' w-40% '>
          <div className='flex'>
            <div className='flex  justify-center items-center '>
              <input
                required
                id='first name'
                type='text'
                name='firstname'
                value={""}
                tabIndex={1}
                className=' input-field  rounded-xl p-[1rem] border-[2px] border-slate-400 w-[15vw] mx-[1rem] '
              />
              <p className=' input-label capitalize text-2xl text-slate-900  '>
                first name
              </p>
            </div>

            <div className='flex gap-3 justify-center items-center '>
              <input
                required
                id='second name'
                type='text'
                name='Second name'
                value={""}
                tabIndex={2}
                className=' input-field rounded-xl p-[1rem] border-[2px] border-slate-400 w-[15vw] mx-[1rem] '
              />
              <p className='input-label2 text-2xl text-slate-900 capitalize '>
                last name
              </p>
            </div>
          </div>

          <div className=' capitalize flex flex-col gap-[4rem] my-[4rem] '>
            <div className='flex  justify-center items-center '>
              <input
                required
                id='phone no.'
                type='tel'
                name='phoneNumber'
                value={""}
                tabIndex={3}
                className=' input-field3  rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
              />
              <p className=' input-label3 text-2xl text-slate-900  '>
                phone number
              </p>
            </div>

            <div className='flex gap-3 justify-center items-center '>
              <input
                required
                id='email'
                type='text'
                name='email'
                value={""}
                tabIndex={4}
                className=' input-field4 rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
              />
              <p className='input-label4 text-2xl text-slate-900 capitalize '>
                email
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            <input
              type='checkbox'
              required
              name='checkBox'
              checked={false}
              onChange={"handleCheckbox"}
              id=''
              className=' w-6 h-6 bg-[rgb(4,16,62)] rounded-md'
            />
            <p className='capitalize text-sl text-slate-400'>
              By ticking this checkbox, you agree to being added to our mailing
              list
            </p>
          </div>

          <button
            onClick={Navigate("")}
            type='submit'
            className='my-[1rem] w-full hover:bg-blue-950  rounded-lg text-center bg-[rgb(4,16,62)] p-[1rem] text-2xl capitalize text-white '>
            continue
          </button>
          <p className='text-xl capitalize '>
            has an account already??{" "}
            <span className='text-[rgb(4,16,62)] capitalize  text-xl'>
              <a href='jkjhbd'> log in</a>{" "}
            </span>
          </p>
        </form>
      </div>
      {/* <CreatePassword /> */}
    </div>
  );
};

export default SignUP;

//create password section
