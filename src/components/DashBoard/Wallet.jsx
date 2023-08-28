import React, { useState } from "react";
import { DashboardCard,SearchInput } from "./DashBoard";
const Wallet = () => {
  return (
    <div className="h-screen flex justify flex-col items-center m-auto gap-4 w-full">
      <DashboardCard >
        <p className='inline font-bold capitalize'>wallet</p>
          </DashboardCard>
          <SearchInput/>
    </div>
  );
};

export default Wallet;

// const WalletTabs = ({ setFilterStatus }) => {
//   const [activeTab, setActiveTab] = useState("credit");

//   const handleTabClick = (status) => {
//     setActiveTab(status);
//     setFilterStatus(status);
//   };

//   return (
//     <div className='flex justify-center mt-4'>
//       <div className='flex'>
//         <div
//           className={`px-4 py-2 rounded-tl-md rounded-tr-md cursor-pointer ${
//             activeTab === "credit" ? "bg-gray-300" : ""
//           }`}
//           onClick={() => handleTabClick("credit")}>
//           Credit
//         </div>
//         <div
//           className={`px-4 py-2 rounded-tr-md rounded-bl-md cursor-pointer ${
//             activeTab === "debit" ? "bg-red-500 text-white" : "bg-gray-300"
//           }`}
//           onClick={() => handleTabClick("debit")}>
//           Debit
//         </div>
//       </div>
//     </div>
//   );
// };
