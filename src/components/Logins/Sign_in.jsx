import React from "react";
const Sign_in = () => {
  return (
    <div>
      <form action='' className='my-[5rem] w-[50%]'>
        <div className='flex flex-col my-[3rem] justify-center items-center'>
          <input
            required
            id='Email'
            type='email'
            name='email'
            value={""}
            tabIndex={1}
            className='email-field rounded-xl p-[1rem] border-[2px] border-slate-400 w-full mx-[1rem] focus:outline-none focus:border-blue-500'
          />
          <p className='email relative capitalize text-2xl text-slate-900 transition-transform group focus:translate-y-[-120%]'>
            Email
          </p>
        </div>
      </form>
    </div>
  );
};

export default Sign_in;
