import React, { useContext, useState } from "react";
import { AllContext } from "../../App";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const SignUP = () => {
  const Navigate = useNavigate();
  const store = useContext(AllContext);
  const { logo, LandingPageImages } = store;
  const [formData, setFormData] = useState({
    firstname: "",
    secondName: "",
    phoneNumber: "",
    email: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='flex w-full flex-col md:flex-row'>
      <div className='right hidden bg-gray-50 w-[50%] mr-[15rem] h-full md:flex gap-[33rem] justify-center items-center flex-col  '>
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

      <form action='' onSubmit={handleSubmit} className=' w-full'>
        <div className='left p-3 md:w-[50%] flex flex-col  items-center md:m-auto md:items-start '>
          <div>
            <div className='p-[2rem] mb-[10px] flex flex-col gap-2 text-justify'>
              <h1 className='text-2xl font-bold capitalize font-serif text-[rgb(4,16,61] '>
                create Account
              </h1>
              <p className='capitalize text-xl '>
                use your personal information
              </p>
            </div>
            
            <div className='flex gap-[4rem] md:flex-row flex-col w-full '>
              <div className='flex justify-center items-center '>
                <input
                  onChange={handleFormData}
                  required
                  id='first name'
                  type='text'
                  name='firstname'
                  placeholder='first name'
                  value={formData.Firstname}
                  tabIndex={1}
                  className=' text-white placeholder:uppercase focus:text-gray-900 input-field3  rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
                />
              </div>

              <div className='flex gap-3 justify-center items-center '>
                <input
                  onChange={handleFormData}
                  required
                  id='second name'
                  type='text'
                  name='Secondname'
                  value={formData.SecondName}
                  tabIndex={2}
                  placeholder='second name'
                  className=' text-white placeholder:uppercase focus:text-gray-900 input-field3  rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
                />
              </div>
            </div>
            <div className=' capitalize flex flex-col gap-[4rem] my-[4rem] '>
              <div className='flex  justify-center items-center '>
                <input
                  onChange={handleFormData}
                  required
                  id='phone no.'
                  type='tel'
                  name='phoneNumber'
                  placeholder='phone'
                  value={formData.phone}
                  tabIndex={3}
                  className=' text-white placeholder:uppercase focus:text-gray-900 input-field3  rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
                />
              </div>

              <div className='flex gap-3 justify-center items-center '>
                <input
                  onChange={handleFormData}
                  required
                  id='email'
                  type='text'
                  name='email'
                  placeholder='email'
                  value={formData.email}
                  tabIndex={4}
                  className=' text-white placeholder:uppercase focus:text-gray-900 input-field4 rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] '
                />
              </div>
            </div>
            <div className='flex gap-1'>
              <input
                onChange={() => setIsChecked(!isChecked)}
                type='checkbox'
                required
                name='checkBox'
                checked={isChecked}
                id=''
                className=' w-6 h-6 bg-[rgb(4,16,62)] rounded-md'
              />
              <p className='capitalize text-sl text-slate-400'>
                By ticking this checkbox, you agree to being added to our
                mailing list
              </p>
            </div>
            <button
              onClick={(e) => {
                console.log(formData);
                e.preventDefault();
                Navigate("/createPassword");
              }}
              type='submit'
              id='btn'
              className='my-[1rem] w-full hover:bg-blue-950  rounded-lg text-center bg-[rgb(4,16,62)] p-[1rem] text-2xl capitalize text-white '>
              continue
            </button>
            <p className='text-xl capitalize '>
              has an account already??{" "}
              <span className='text-[rgb(4,16,62)] capitalize  text-xl'>
                <Link to='/login'> log in</Link>{" "}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUP;

//create password section
