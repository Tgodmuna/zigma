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
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { AiOutlineMoneyCollect } from "react-icons/ai";
import KYC_requestCard from "../KYC/KYC_requestCard";
import { TransactionsList } from "../Transactions/TransactionsList";
import { Outlet, useNavigate } from "react-router-dom";
import NotificationCard from "../utility Components/NotificationCard";

//the dashboard himself
const DashBoard = () => {
  // show either outlet of the DashBoard or DashBoardContents
  const [isOutlet, setisOutlet] = useState(false);
  const handleISoutlet = () => {
    setisOutlet(true);
    console.log("triggered outlet and it is showing", isOutlet);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // show the mobileMenu
  const toggleON_MobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // hide the sidebar
  const toggleOFF_MobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className='flex flex-col  '>
      <Navbar
        outletHandler={handleISoutlet}
        MobileMenuHandler={toggleON_MobileMenu}
        icons={{
          icon1: <FaBell size={40} color='rgb(4,16,60)' />,
        }}
      />
      <div className='flex flex-row  '>
        {isMobileMenuOpen ? (
          <MobileMenuList
            outletHandler={handleISoutlet}
            closeSideBar={toggleOFF_MobileMenu}
          />
        ) : (
          <MenuList
            outletHandler={handleISoutlet}
            icons={{
              icon1: <FaDashcube color='rgb(4,16,60)' size={40} />,
              icon2: <FaWallet color='rgb(4,16,60)' size={40} />,
              icon3: <AiOutlineMoneyCollect color='rgb(4,16,60)' size={40} />,
            }}
          />
        )}
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
    <div className=' hidden  bg-gray-200  fixed -top-[0vw] md:flex flex-col md:h-full w-[17vw] gap-[2rem] '>
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
            className={`text-xl text text-blue-950  font-semibold shadow-md font-sans capitalize`}>
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
          <button className='text-xl text text-blue-950 font-semibold shadow-md font-sans capitalize  '>
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
          <button className='text-xl text  text-blue-950 font-semibold shadow-md font-sans capitalize  '>
            exchange{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

//mobile sidebar
const MobileMenuList = ({ outletHandler, closeSideBar }) => {
  const navigate = useNavigate();
  return (
    <div className='mobile-menu-container z-50 md:hidden flex flex-col bg-gray-200 top-[0rem] w-[64vw] mt-[0rem] absolute h-[100%] left-[-1rem] gap-[3rem] items-start '>
      <button className='mobile-menu-button ml-[2rem] mt-4 '>
        <FaTimes size={30} color='rgb(4, 16, 78)' onClick={closeSideBar} />
      </button>

      <div className='mobile-menu'>
        <ul className='flex flex-col justify-between w-full p-[2rem] m-auto'>
          <li
            onClick={() => {
              navigate("/dashboard/main");
              outletHandler();
            }}
            className='uppercase m-4 border border-gray-300 rounded-xl  p-[0.5rem] w-[38vw]  text-xl text-blue-950 font-mono font-semibold shadow-md '>
            DashBoard
          </li>
          <li
            onClick={() => {
              navigate("/dashboard/wallet");
              outletHandler();
            }}
            className='uppercase m-4 border border-gray-300 rounded-xl  p-[0.5rem] w-[38vw]  text-xl text-blue-950 font-mono font-semibold shadow-md '>
            wallet
          </li>
          <li
            onClick={() => {
              navigate("/dashboard/exchange");
              outletHandler();
            }}
            className='uppercase m-4 border border-gray-300 rounded-xl  p-[0.5rem] w-[38vw]  text-xl text-blue-950 font-mono font-semibold shadow-md '>
            exchange
          </li>
        </ul>
      </div>
    </div>
  );
};

//nav bar
const Navbar = ({ outletHandler, MobileMenuHandler }) => {
  const [showBell, setshowBell] = useState(false);
  const handleShowBell = () => {
    setshowBell(true);
  };
  const hideBell = () => {
    setshowBell(false);
    console.log(`show bell is off and the state is ${showBell} `);
  };
  // const [showTitle, setshowTitle] = useState(['title-1','title-2','title-3']);
  // const titles = ['dashboard', 'wallet', 'exchange'];
  // const handleTitle = (titlename) => {
  //   setshowTitle(titlename);
  // }
  const Navigate = useNavigate();
  return (
    <div className='flex w-screen my-0 mx-[0rem]  static bg-gray-200 h-[4rem] md:w-full  md:h-[8rem]'>
      <div className='flex justify-between items-center w-screen flex-grow px-4'>
        <h1 className='text-2xl md:inline hidden capitalize text-gray-800 relative left-[56rem] '>
          Dashboard
        </h1>
        <div className='md:hidden flex justify-between w-[55vw] '>
          <FaBars size={20} onClick={MobileMenuHandler} />
          <h1 className='text-sm  md:hidonClick={()=>{}} den inline uppercase m-4 font-bold text-gray-500'>
            dashboard
          </h1>
        </div>

        <div className='flex justify-center items-center space-x-[23px]'>
          <FaBell
            className='cursor-pointer md:block hidden '
            size={40}
            onClick={handleShowBell}
          />
          {/* mobile notificationBell */}
          <FaBell
            className='cursor-pointer md:hidden block '
            size={20}
            onClick={handleShowBell}
            color='gray'
          />
          <div className='w-10 h-10 text-center hidden md:block p-2 bg-gray-200 rounded-full'>
            <p className='text-xs text-blue-900  object-contain '>photo</p>
          </div>

          <div
            className='w-10 md:hidden h-10 text-center p-2 bg-white rounded-full'
            onClick={() => {
              Navigate("/dashboard/profile");
              outletHandler();
            }}>
            <p className='text-xs text-blue-900  object-contain '>photo</p>
          </div>
          <p
            onClick={() => {
              Navigate("/dashboard/profile");
              outletHandler();
            }}
            className=' hidden md:inline text-xl cursor-pointer text-gray-700'>
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
    <div className=' dashboardCard flex flex-col items-start   md:relative justify-start md:mr-[66.75rem] mr-0  md:m-0 mt-5  md:w-[16vw] w-[82vw] bg-gray-50  rounded-lg p-4  shadow-md'>
      <h2 classNam text-blue-950e='text-xl font-semibold shadow-md mb-2'>
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
    <div className=' dashboard_contents md:w-9/12  md:ml-[21rem] bg-white rounded-xl  p-0 z-10   relative  flex flex-col  md:pl-[3rem] justify-center items-center'>
      <DashboardCard />
      <CardContainer />
      <KYC_requestCard showDashBoardOutlet={outletHandler} />
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
    <div className='cardBTN bg-gray-50 rounded-lg px-4 md:px-[3rem] w-[11rem] md:w-[16rem] h-[60px] md:h-[5rem] shadow-md cursor-pointer flex items-center justify-center space-x-2'>
      {icon}
      <span className='text-lg font-medium'>{label}</span>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className=' cardContainer  relative left-0  justify-end md:ml-[4rem] md:m  flex-row-reverse flex gap-[1.5rem] mt-3 w-full  '>
      <CardButton
        label='Send Money'
        icon={<FaMoneyBillWave size={35} color={"rgb(4,16,60)"} />}
      />
      <CardButton
        label='Fund account'
        icon={<FaWallet size={35} color={"rgb(4,16,60)"} />}
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
    <div className='flex items-center my-[1rem] border md:my-[2rem] w-fit md:w-9/12 rounded-lg p-2'>
      <div className='flex items-center pr-2'>
        <FaSearch size={45} className='text-gray-600' />
      </div>
      <input
        type='text'
        className='flex-grow border-none focus:ring-5 bg-transparent p-[0.5rem] focus:outline-none'
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
  MobileMenuList,
  SearchInput,
};
