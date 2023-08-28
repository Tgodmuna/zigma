/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
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
import { TransactionsList } from "../Transactions/TransactionsList";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import NotificationCard from "../utility Components/NotificationCard";

//the dashboard himself
const DashBoard = () => {
  const [isOutlet, setisOutlet] = useState(false);
  const handleISoutlet = () => {
    setisOutlet(true);
    console.log("triggered", isOutlet);
  };
  return (
    <div className='flex flex-col  '>
      <Navbar
        outletHandler={handleISoutlet}
        icons={{
          icon1: <FaBell size={40} color='rgb(4,16,60)' />,
        }}
      />
      <div className='flex flex-row  '>
        <MenuList
          outletHandler={handleISoutlet}
          icons={{
            icon1: <FaDashcube color='rgb(4,16,60)' size={40} />,
            icon2: <FaWallet color='rgb(4,16,60)' size={40} />,
            icon3: <AiOutlineMoneyCollect color='rgb(4,16,60)' size={40} />,
          }}
        />
        {isOutlet !== true ? (
          <DashBoardContents outletHandler={handleISoutlet} />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

//sidebar

const MenuList = ({ icons, outletHandler }) => {
  const Navigate = useNavigate();
  const [isActiveTab, setisActiveTab] = useState(0);
  const handleisActiveTab = (tabNum) => {
    setisActiveTab(tabNum);
  };

  return (
    <div className=' bg-gray-200  fixed -top-[0vw] flex flex-col h-full w-[17vw] gap-[2rem] '>
      <p className=' text-6xl text-center font-bold relative  -top-[0rem]  '>
        ziga
      </p>{" "}
      <ul className='flex flex-col h-[56rem] m-auto gap-[2rem] w-full static items-center'>
        <li
          onClick={() => {
            const tabnum = 1 || 0;
            handleisActiveTab(tabnum);
            Navigate("/dashboard/main");
            outletHandler();
          }}
          className={`flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 focus:bg-slate-500 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px] ${
            isActiveTab === 1 ? "bg-gray-50 border border-slate-400 " : null
          }`}>
          <span>{icons.icon1}</span>
          <button
            className={`text-xl text-slate-900 font-semibold font-sans capitaliz`}>
            dashboard
          </button>
        </li>

        <li
          onClick={() => {
            const tabnum = 2;
            handleisActiveTab(tabnum);
            Navigate("/dashboard/wallet");
            outletHandler();
          }}
          className={`flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px] ${
            isActiveTab === 2 ? "bg-gray-50 border border-slate-400" : null
          }`}>
          <span>{icons.icon2}</span>
          <button className='text-xl text-slate-900 font-semibold font-sans capitalize  '>
            wallet
          </button>
        </li>

        <li
          onClick={() => {
            const tabnum = 3;
            handleisActiveTab(tabnum);
            Navigate("/dashboard/exchange");
            outletHandler();
          }}
          className={`flex w-[13vw] gap-5 list-none hover:bg-gray-300 hover:px-9 focus:bg-slate-500 p-3 pl-1 pr-[2rem] mx-3 rounded-lg h-[66px ${
            isActiveTab === 3 ? "bg-gray-50 border  border-slate-400" : null
          } `}>
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

const Navbar = () => {
  const [showBell, setshowBell] = useState(false);
  const handleShowBell = () => {
    setshowBell(true);
  };
  const hideBell = () => {
    setshowBell(false);
    console.log(`show bell is off and the state is ${showBell} `);
  };
  const [showTitle, setshowTitle] = useState(['title-1','title-2','title-3']);
  const titles = ['dashboard', 'wallet', 'exchange'];
  const handleTitle = (titlename) => {
    setshowTitle(titlename);
  }
  const Navigate = useNavigate();
  return (
    <div className='flex  static bg-gray-200 w-full  h-[10rem]'>
      <div className='flex justify-between items-center w-screen flex-grow px-4'>
        <h1 className='text-2xl capitalize text-gray-800 relative left-[56rem] '>
          Dashboard
        </h1>
        <div className='flex justify-center items-center space-x-[23px]'>
          <FaBell
            className='cursor-pointer'
            size={40}
            onClick={handleShowBell}
          />
          <div className='w-10 h-10 text-center p-2 bg-white rounded-full'>
            <p className='text-xs text-blue-900  object-contain '>photo</p>
          </div>
          <p
            onClick={() => Navigate("/dashboard/profile")}
            className=' text-xl cursor-pointer text-gray-700'>
            ThankGod
          </p>
        </div>
      </div>
      <div className='  bg-gray-800'>
        {showBell && <NotificationCard hideBell={hideBell} />}
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
    <div className=' flex flex-col items-start justify-start relative left-[-22rem] rounded-lg p-4 w-[16vw] shadow-md'>
      <h2 className='text-xl font-semibold mb-2'>
        <span>{prop.children}</span> Balance
      </h2>
      <p className='text-4xl font-bold text-[rgb(4,16,60)]'>
        <span className='text-5xl'>{integerPart}</span>.
        <span className='text-2xl'>{decimalPart}</span>
      </p>
    </div>
  );
};

const DashBoardContents = ({ outletHandler }) => {
  return (
    <div className=' dashboard_contents w-screen  ml-[21rem] bg-gray-50 rounded-xl   z-10   relative  flex flex-col  pl-[3rem] justify-center items-center'>
      <DashboardCard />
      <CardContainer />
      <KYC_requestCard level2Outlet={outletHandler} />
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
    <div className='relative left-[-15rem] flex-row-reverse flex gap-[1.5rem] mt-3'>
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
