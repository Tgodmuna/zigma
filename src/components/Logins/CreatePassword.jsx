import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const [password, setpassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/login");
  };

  const [validationMessage, setValidationMessage] = useState({});

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setpassword({ ...password, [name]: value });
    console.log( password);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!passwordPattern.test(password.password)) {
      validationErrors.password =
        "Password must be at least 8 characters long, contain an uppercase letter, and a number";
    }

    if (password.password !== password.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setValidationMessage(validationErrors);
      return;
    }

    setValidationMessage({});

    // try {

    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <div className="my-[4rem]" >
      <div className=' w-full flex flex-col justify-center items-center '>
        <p className='text-3xl text-left md:w-[40vw]  text-blue-950 font-bold m-3 uppercase'>
          create password
        </p>
        <p className='text-xl md:w-[40vw] text-gray-300 text-justify capitalize mx-3 '>
          Must include atleast 8 characters,an uppercasea and a number
        </p>
      </div>

      <div className='flex flex-col-reverse px-[2rem] my-[2rem] justify-center items-center '>
        <input
          required
          id='Cpsw'
          type='password'
          name='password'
          value={password.password}
          onChange={handlePassword}
          tabIndex={1}
          className='Password-field md:w-[40vw]  w-full mt-4 md:p-[2rem] p-[1rem] rounded-2xl  border-[2px] border-slate-300 w'
        />
        {/* Password label */}
        <p className='Password-label text-left md:w-[40vw] w-full font-bold capitalize text-2xl text-slate-500'>
          create password
        </p>
        {validationMessage.password && (
          <p className='text-red-500'>{validationMessage.password}</p>
        )}
      </div>

      {/* Confirm Password input */}
      <div className='flex flex-col-reverse px-[2rem]  justify-center items-center'>
        <input
          required
          id='psw'
          type='password'
          name='confirmPassword'
          value={password.confirmPassword}
          onChange={handlePassword}
          tabIndex={1}
          className='confirm-field md:w-[40vw] w-full mt-4 md:p-[2rem] p-[1rem] rounded-2xl  border-[2px] border-slate-300'
        />
        {/* Confirm Password label */}
        <p className='Password-label text-left md:w-[40vw] w-full font-bold capitalize text-2xl text-slate-500'>
          confirm password
        </p>
        {validationMessage.confirmPassword && (
          <p className='text-red-500'>{validationMessage.confirmPassword}</p>
        )}{" "}
      </div>

      {/* Submit button */}
      <button
        onSubmit={() => {
          handleSubmit();
          handleNavigate();
        }}
        type='submit'
        className='my-[1rem] md:w-[20%] Btn cursor-pointer hover:bg-blue-950 rounded-2xl text-center bg-[rgb(4,16,62)] p-[1rem] text-2xl capitalize text-white'>
        next
      </button>
    </div>
  );
};

export default CreatePassword;
