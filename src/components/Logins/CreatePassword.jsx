import React from 'react'
import axios from 'axios'
import { useState } from 'react';

const CreatePassword = () => {
  const [password, setpassword] = useState({
    password: undefined,
    confirmPassword: undefined,
  });
  const [validationMessage, setValidationMessage] = useState({});

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setpassword({ [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!passwordPattern.test(password.password)) {
      setValidationMessage({
        password:
          "Password must be at least 8 characters long, contain an uppercase letter, and a number",
      });
      return;
    }

    if (password.password !== password.confirmPassword) {
      setValidationMessage({
        confirmPassword: "Passwords do not match",
      });
      return;
    }
    setValidationMessage({});

    if (password.username && password.password) {
      try {
        const response = await axios.post("hgjusgqyuhs", password);
        console.log("Form submitted:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form fields are incomplete.");
    }
  };
  return (
    <div>
      <div className=' text-justify  flex gap-[1rem] flex-col justify-start items-start '>
        <p className='font  mb-[2.5rem] text-3xl text-[hsl(226,87%,12%)] capitalize font-sans font-bold '>
          create password
        </p>
        <p className='font -mt-[3rem] text-xl text-[hsl(226,87%,12%)] capitalize font-sans font-bold '>
          Must include atleast 8 characters,an uppercasea dna number
        </p>
      </div>

      <div className='flex my-[5rem] justify-center items-center '>
        <input
          required
          id='Cpsw'
          type='password'
          name='password'
          value={password.password}
          onChange={handlePassword}
          tabIndex={1}
          className=' Password-field my-[2rem] rounded-xl p-[1rem] border-[2px] border-slate-400 w-[15vw] mx-[1rem] '
        />
        <p className=' Password-label my-[5.5rem]  font-bold capitalize text-2xl text-slate-900  '>
          create password
        </p>
      </div>

      <div className='flex my-[5rem] justify-center items-center '>
        <input
          required
          id='psw'
          type='password'
          name='confirmPSW'
          value={password.confirmPasword}
          onChange={handlePassword}
          tabIndex={1}
          className=' confirmPSW-field my-[2rem] rounded-xl p-[1rem] border-[2px] border-slate-400 w-[15vw] mx-[1rem] '
        />
        <p className=' confirmPSW-label my-[2.5rem]  font-bold capitalize text-2xl text-slate-900  '>
          confirm password
        </p>
        <p></p>
      </div>
      <button
        onSubmit={handleSubmit}
        type='submit'
        className='my-[1rem] w-full hover:bg-blue-950  rounded-lg text-center bg-[rgb(4,16,62)] p-[1rem] text-2xl capitalize text-white '>
        next
      </button>
    </div>
  );
};


export default CreatePassword