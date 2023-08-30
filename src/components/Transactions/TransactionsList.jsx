import React, { useState } from "react";
import { SearchInput } from "../DashBoard/DashBoard";

const TransactionsList = () => {
  const Transactions = [
    {
      receiver: "Ada",
      date: "2023-08-10",
      status: "completed",
      amount: 150.75,
    },
    {
      receiver: "Obi",
      date: "2023-08-11",
      status: "pending",
      amount: 50.2,
    },
    {
      receiver: "Charlie",
      date: "2023-08-12",
      status: "completed",
      amount: 75.3,
    },
    {
      receiver: "Mia",
      date: "2023-08-13",
      status: "completed",
      amount: 120.0,
    },
    {
      receiver: "Eve",
      date: "2023-08-14",
      status: "pending",
      amount: 30.5,
    },
    {
      receiver: "Frank",
      date: "2023-08-15",
      status: "completed",
      amount: 90.8,
    },
    {
      receiver: "Grace",
      date: "2023-08-16",
      status: "completed",
      amount: 200.25,
    },
    {
      receiver: "Helen",
      date: "2023-08-17",
      status: "pending",
      amount: 60.1,
    },
    {
      receiver: "Ivan",
      date: "2023-08-18",
      status: "completed",
      amount: 180.5,
    },
    {
      receiver: "omotala",
      date: "2023-08-19",
      status: "completed",
      amount: 95.7,
    },
    {
      receiver: "kemi",
      date: "2023-08-20",
      status: "pending",
      amount: 25.4,
    },
    {
      receiver: "Liam",
      date: "2023-08-21",
      status: "completed",
      amount: 110.6,
    },
    {
      receiver: "Mya",
      date: "2023-08-22",
      status: "completed",
      amount: 70.9,
    },
    {
      receiver: "Noah",
      date: "2023-08-23",
      status: "pending",
      amount: 45.75,
    },
    {
      receiver: "Olivia",
      date: "2023-08-24",
      status: "completed",
      amount: 150.2,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const HS = (searchInput) => {
    setSearchTerm(searchInput);
  };
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTransactions = Transactions.filter((transaction) => {
    const isMatchingSearch = transaction.receiver
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (filterStatus === "all") {
      return isMatchingSearch;
    } else if (filterStatus === "pending") {
      return transaction.status === "pending" && isMatchingSearch;
    } else if (filterStatus === "failed") {
      return transaction.status === "failed" && isMatchingSearch;
    } else if (transaction.status === "completed") {
      return transaction.status === "completed " && isMatchingSearch;
    }
    return false;
  });

  return (
    <div className='   h-auto md:w-9/12 m-auto '>
      <SearchInput Handler={HS} />
      <TransactionTabs setFilterStatus={setFilterStatus} />
      {/* Display the filtered transactions */}
      {filteredTransactions.map((transaction, index) => (
        <div
          key={index}
          className='border md:w-9/12  flex justify-between  p-4 mb-1 md:mb-2'>
          <div className='flex flex-col items-start justify-start'>
            <p className='font-bold text-[rgb(4,16,83) text-2xl my-3 '>
              {transaction.receiver}
            </p>
            <p>Date: {transaction.date}</p>
            <p
              className={`${
                transaction.status === "completed"
                  ? "text-green-500"
                  : "text-red-400"
              }`}>
              Status: {transaction.status}
            </p>
          </div>
          <div>
            <p className='text-xl'>Amount: {transaction.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const TransactionTabs = ({ setFilterStatus }) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (status) => {
    setActiveTab(status);
    setFilterStatus(status);
  };

  return (
    <div className='flex justify-center  overflow-hidden items-center md:w-9/12'>
      <div className='flex gap-3 rounded-md w-full border-[2px] items-center justify-center py-[1rem]'>
        <div
          className={`md:px-4 px-1 py-2 rounded-tl-md  text-xl md:text-2xl rounded-tr-md cursor-pointer ${
            activeTab === "all"
              ? "bg-sky-100 translate-x-2  duration-[3000] transition-all "
              : ""
          }`}
          onClick={() => handleTabClick("all")}>
          All
        </div>
        <div
          className={` px-4 md:text-xl capitalize py-2 rounded-t-md rounded-b-md cursor-pointer ${
            activeTab === "pending"
              ? "bg-sky-100 translate-x-2  duration-[4000] transition-all "
              : ""
          }`}
          onClick={() => handleTabClick("pending")}>
          Pending
        </div>
        <div
          className={`px-4 py-2 rounded-tr-md md:text-xl capitalize rounded-bl-md cursor-pointer ${
            activeTab === "failed"
              ? "bg-sky-100 translate-x-2  duration-[3000] transition-all "
              : ""
          }`}
          onClick={() => handleTabClick("failed")}>
          Failed
        </div>
        <div
          className={`px-4 py-2 rounded-tr-md md:text-xl capitalize rounded-bl-md cursor-pointer ${
            activeTab === "completed"
              ? "bg-sky-100 translate-x-2  duration-[3000] transition-all "
              : ""
          }`}
          onClick={() => handleTabClick("completed")}>
          completed{" "}
        </div>
      </div>
    </div>
  );
};
export { TransactionsList, TransactionTabs };
