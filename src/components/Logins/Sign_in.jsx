import React, { useContext, useState } from "react";
import "../Style/Sign_in.css";
import { AllContext } from "../../App";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const store = useContext(AllContext);
  const { logo, LandingPageImages } = store;
  const [state, setstate] = useState({ email: "", password: "" });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div className='flex justify-center w-full flex-col md:flex-row'>
      <div className='right hidden bg-gray-50 w-[50%] mr-[15rem] h-full md:flex gap-[33rem] justify-center items-center flex-col'>
        {/* Left Section Content */}
        <div className='left bg-gray-50 w-[50%] mr-[15rem] h-full flex gap-[33rem] justify-center items-center flex-col  '>
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
      </div>

      <div className='right md:w-[50%] w-full  flex flex-col md:items-start items-center'>
        <div className='p-[2rem] mb-[10px] flex flex-col gap-2 text-justify'>
          <h1 className='text-2xl font-bold capitalize font-serif text-[rgb(4,16,61)]'>
            Login to your Account
          </h1>
        </div>

        {/* Login Form */}
        <form
          action=''
          onSubmit={() => {
            handleSubmit();
            navigate("/dashboard");
          }}
          className=' w-full md:w-[60%]'>
          <div className='capitalize flex flex-col gap-[4rem] my-[4rem]'>
            <div className='flex justify-center items-center'>
              <input
                onChange={handleFormData}
                required
                id='email'
                type='text'
                name='email'
                value={state.email}
                placeholder='email'
                tabIndex={4}
                className='email-field placeholder:uppercase rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem]'
              />
            </div>

            <div className='flex gap-3 justify-center items-center'>
              <input
                onChange={handleFormData}
                required
                id='password'
                type='password'
                placeholder='password'
                name='password'
                value={state.password}
                tabIndex={5}
                className='password-field placeholder:uppercase rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem]'
              />
            </div>
          </div>

          <button
            type='submit'
            className='my-[1rem] w-full hover:bg-blue-950 rounded-lg text-center bg-[rgb(4,16,62)] p-[1rem] text-2xl capitalize text-white'>
            continue
          </button>
          <p className='text-xl capitalize'>
            No account already?{" "}
            <span className='text-[rgb(4,16,62)] capitalize text-xl'>
              <a href='signup'>sign up</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
