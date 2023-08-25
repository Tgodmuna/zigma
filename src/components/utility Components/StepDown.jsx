import React from "react";
import { useState } from "react";

const StepCard = ({ stepNumber, title, content, isActive }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`step-card ${isActive ? "active" : ""} text-center mt-[7rem] ${
        isFocused ? "bg-green-500" : ""
      }}
 text-gray-50 `}
      style={{
        "--step-duration": "40000ms",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}>
      <svg
        className='flex bg- bg-[rgb(4,16,61)] rounded-lg py-[2rem]  '
        width='20'
        height='100%'
        viewBox='0 0 20 245'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          maskType: "alpha",
        }}>
        <path d='M10 0V245' stroke='#D9EBCD' strokeWidth='10' />
      </svg>

      <div className='step-side md:relative md:-top-[10rem]  md:-left-[3rem]'>
        <div
          className='step-no md: bg-[rgb(4,16,61)] md:rounded-full  md:w-20 md:h-20 md:flex md:items-center md:justify-center md:md:text-4xl md:md:font-bold'
          tabIndex='0'
          onFocus={handleFocus}
          onBlur={handleBlur}>
          {stepNumber}
        </div>
        <div className='step-line m-8'></div>
      </div>
      <div className='step-content  bg-[rgb(4,16,61)]  p-[2rem] rounded-2xl text-slate-50  w-[15rem] '>
        <h3 className='md:text-3xl font-semibold text-center'>{title}</h3>
        <p className='md:text-xl'>{content}</p>
      </div>
    </div>
  );
};

const StepsComponent = () => {
  return (
    <div className='hidden md:block'>
      <div className='steps'>
        <h1 className='text-6xl text-left text-neutral-950  font-bold'>
          How ziga works
        </h1>

        <StepCard
          stepNumber={1}
          title='Create your free account'
          content='Click here to set up your account.'
          isActive={true}
        />
        <StepCard
          stepNumber={2}
          title='lorem'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,{" "}
        architecto blanditiis facilis consectetur nulla dolore non totam il'
          isActive={false}
        />
        <StepCard
          stepNumber={3}
          title='Prepare your Transaction'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,{" "}
        architecto blanditiis facilis consectetur nulla dolore non totam il'
          isActive={false}
        />

        <StepCard
          stepNumber={4}
          title='send your money'
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,{" "}
        architecto blanditiis facilis consectetur nulla dolore non totam il'
          isActive={false}
        />
      </div>
    </div>
  );
};

export default StepsComponent;
