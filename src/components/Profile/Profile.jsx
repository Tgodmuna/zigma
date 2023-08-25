import React, { useState } from "react";
import Account from "./Account";
import { Security } from "./Security";

const Profile = () => {
  const [tab, settab] = useState("active");
  const [isActiveTab, setisActiveTab] = useState(true);
  const handleTAB = (tabName) => {
    settab(tabName);
    setisActiveTab(false);
  };
  return (
    <div>
      <div className='flex p-[2rem] h-[50px] border-[2px] border-slate-300 gap-[1rem] mt-[3rem] rounded-xl  w-[40%] justify-start items-center  '>
        <div
        //   onLoad={() => handleTAB("account")}
          onClick={() => handleTAB("account")}
          className={`${
            tab === "account" ? "bg-teal-100" : null
          } text-xl capitalize font-bold p-[0.45rem] rounded w-full bg-gray-100 border`}>
          account
        </div>
        <div
          onClick={() => handleTAB("security")}
          className={`${
            tab === "security" ? "bg-teal-100" : null
          } text-xl capitalize font-bold p-[0.45rem] bg-gray-100 border px-[2rem] w-full  rounded `}>
          security
        </div>
      </div>

      {isActiveTab === !true && tab === "account" ? (
        <>
          <Account />
        </>
      ) : (
        <>{isActiveTab === false && tab === "security" ? <Security /> : null}</>
      )}
    </div>
  );
};

export default Profile;
