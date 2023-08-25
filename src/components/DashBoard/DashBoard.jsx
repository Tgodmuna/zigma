/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useState } from "react";
// import { AllContext } from "../../App";
import {
  FaDashcube,
  FaWallet,
  FaMoneyBillWave,
  FaSearch,
  FaCalendar,
  FaBell,
} from "react-icons/fa";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import KYC_requestCard from "../KYC/KYC_requestCard";
import {
  TransactionTabs,
  TransactionsList,
} from "../Transactions/TransactionsList";
const DashBoard = () => {
  return (
    <div className='flex flex-col '>
      <Navbar
        icons={{
          icon1: <FaBell size={40} color='rgb(4,16,60)' />,
        }}
      />
      <div className='flex flex-row  '>
        <MenuList
          icons={{
            icon1: <FaDashcube color='rgb(4,16,60)' size={40} />,
            icon2: <FaWallet color='rgb(4,16,60)' size={40} />,
            icon3: <AiOutlineMoneyCollect color='rgb(4,16,60)' size={40} />,
          }}
        />
        <div className='bg-slate-300 flex ml-[335px] rounded-tl-3xl w-full '>
          <DashBoardContents />
        </div>
      </div>
    </div>
  );
};

//sidebar

const MenuList = ({ icons }) => {
  return (
    <div className=' bg-gray-200  fixed -top-[0vw] flex flex-col h-full w-[17vw] gap-[2rem] '>
      <p className=' text-6xl text-center font-bold relative  -top-[0rem]  '>
        ziga
      </p>{" "}
      <ul className='flex flex-col h-[56rem] m-auto gap-[2rem] w-full static items-center'>
        <li className='flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 focus:bg-slate-500 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px]'>
          <span>{icons.icon1}</span>
          <button className='text-xl text-slate-900 font-semibold font-sans capitalize  '>
            dashboard
          </button>
        </li>

        <li className='flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 focus:bg-slate-500 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px]'>
          <span>{icons.icon2}</span>
          <button className='text-xl text-slate-900 font-semibold font-sans capitalize  '>
            wallet
          </button>
        </li>

        <li className='flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 focus:bg-slate-500 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px]'>
          <span>{icons.icon3}</span>
          <button className='text-xl text-slate-900 font-semibold font-sans capitalize  '>
            exchange{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

//nav bar

const Navbar = ({ icons }) => {
  return (
    <div className='flex bg-gray-200  h-[10rem]'>
      <div className='w-17vw bg-gray-800'></div>
      <div className='flex justify-between items-center flex-grow px-4'>
        <h1 className='text-2xl text-gray-800 relative left-[56rem] '>
          Dashboard
        </h1>
        <div className='flex justify-center items-center space-x-[23px]'>
          {icons.icon1}

          <div className='w-10 h-10 text-center p-2 bg-white rounded-full'>
            <p className='text-xs text-blue-900  object-contain '>photo</p>
          </div>
          <p className=' text-xl text-gray-700'>ThankGod</p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = (prop) => {
  const balance = 6_000_000.0;

  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  const [integerPart, decimalPart] = formattedBalance.split(".");

  return (
    <div className=' rounded-lg p-4 w-[16vw] shadow-md'>
      <h2 className='text-xl font-semibold mb-2'>
        <span >{prop.children}</span> Balance
      </h2>
      <p className='text-4xl font-bold text-[rgb(4,16,60)]'>
        <span className='text-5xl'>{integerPart}</span>.
        <span className='text-2xl'>{decimalPart}</span>
      </p>
    </div>
  );
};

const DashBoardContents = () => {
  return (
    <div className='flex flex-col my-[7rem] pl-[3rem] justify-start items-start'>
      <DashboardCard />
      <CardContainer />
      <KYC_requestCard />
      <TransactionsList />

      <div className='flex flex-col justify-center m-auto items-center p-4 '>
        <p className='font-bold capitalize text-[rgb(4,16,69)] text-center text-2xl my-9'>
          there is nothing here to see yet
        </p>
        <p className='capitalize text-center text-base text-slate-300'>
          this is where your recent transaction will appear
        </p>
      </div>
    </div>
  );
};

const CardButton = ({ label, icon }) => {
  return (
    <div className='bg-slate-300 rounded-lg px-[3rem] w-[16rem] h-[5rem] shadow-md cursor-pointer flex items-center justify-center space-x-2'>
      {icon}
      <span className='text-lg font-medium'>{label}</span>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className='flex-row-reverse flex gap-[1.5rem] mt-3'>
      <CardButton
        label='Send Money'
        icon={<FaMoneyBillWave size={40} color={"rgb(4,16,60)"} />}
      />
      <CardButton
        label='Fund Wallet'
        icon={<FaWallet size={40} color={"rgb(4,16,60)"} />}
      />
    </div>
  );
};

const SearchInput = ({ Handler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    Handler(newInputValue);
  };

  return (
    <div className='flex items-center my-[2rem] border w-[40vw] rounded-lg p-2'>
      <div className='flex items-center pr-2'>
        <FaSearch size={45} className='text-gray-600' />
      </div>
      <input
        type='text'
        className='flex-grow border-none focus:ring-5 bg-transparent p-[2rem] focus:outline-none'
        placeholder='Search for transactions...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className='flex items-center pl-2'>
        <FaCalendar size={45} className='text-gray-900' />
      </div>
    </div>
  );
};

export {
  DashBoardContents,
  DashboardCard,
  DashBoard,
  Navbar,
  MenuList,
  SearchInput,
};
