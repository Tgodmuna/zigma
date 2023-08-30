import React from "react";
import { DashboardCard } from "./DashBoard";
import { TransactionsList } from "../Transactions/TransactionsList";
const Wallet = () => {
  return (
    <div className='h-screen wallet w-full'>
      <div className="relative md:left-[35.9rem]">
        <DashboardCard>
          <p className='inline font-bold capitalize'>wallet</p>
        </DashboardCard>
      </div>

      <div className="w-full relative md:left-[20rem] ">
        <TransactionsList />
      </div>
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
