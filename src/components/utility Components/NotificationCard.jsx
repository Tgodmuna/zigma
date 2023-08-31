/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaTimes, FaUser } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import EmptyNotification from "./EmptyNotification";

const NotificationCard = ({ hideBell }) => {
  const [ShowNoNotificationCard, setShowNoNotificationCard] = useState(false);
  //notification container
  const [Notifications, setNotifications] = useState([
    {
      noticationIMage: null,
      TimeStamp: null,
      noticationBody: null,
      noticationAvater: null,
    },
  ]);
  // making a notification request from an endpoint if there is any
  useEffect(() => {
    axios
      .get("kjkjbajkgkjgkjdkjbsjgsjgskbkajb")
      .then((reponse) => {
        console.log(reponse);
        setNotifications(reponse);
      })
      .catch(
        (err) => console.log(err, "error retrieving notififcation"),
        setShowNoNotificationCard(''),
        console.log(ShowNoNotificationCard)
      );
  },[ShowNoNotificationCard]);
  return (
    // conditionally render either the notifications or an empty notification component
    <div>
      {" "}
      {ShowNoNotificationCard ? (
        <>
          <EmptyNotification />{" "}
        </>
      ) : (
        <div className='absolute z-30 md:top-[7rem] top-[3rem] w-[20rem] left-[6rem] md:right-[-92rem] md:h-[30vw] h-[60vh] bg-gray-100  m-auto rounded-md md:w-min  justify-between overflow-y-scroll    shadow-md flex flex-col my-3 items-start'>
          <div className='flex flex-row-reverse capitalize items-end   w-full mt-3 j'>
            <div className='w-full flex gap-2 p-3 justify-end items-center mx-3  '>
              <FaTimes
                onClick={hideBell}
                className='cursor-pointer '
                color='rgb(4,16,69)'
                size={20}
              />
            </div>
            <p className='font-bold text-xl cursor-pointer '>
              mark all as read
            </p>
          </div>
          <hr className='w-full border-t-2 border-slate-500' />
          <div className='flex w-fit hover:shadow-lg  justify-between gap-[2rem] hover:bg-sky-100 m-5 px-5 cursor-pointer      pt-[1rem] '>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full'>
              <FaUser color='rgb(4,16,69)' size={40} />
            </div>
            <div className='flex gap-2 capitalize h-full w-full items-start  justify-between'>
              <h1 className='text-slate-800 w-3rem capitalize font-bold text-3xl '>
                mr oshodi{" "}
              </h1>
              <p className='block m-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem numquam libero reprehenderit accusantium, commodi
                repellendus quo
              </p>
            </div>
          </div>
          <div className='flex w-fit hover:shadow-lg  justify-between gap-[2rem] hover:bg-sky-100 m-5 px-5 cursor-pointer      pt-[1rem] '>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full'>
              <FaUser color='rgb(4,16,69)' size={40} />
            </div>
            <div className='flex gap-2 capitalize h-full w-full items-start  justify-between'>
              <h1 className='text-slate-800 w-3rem capitalize font-bold text-3xl '>
                mr oshodi{" "}
              </h1>
              <p className='block m-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem numquam libero reprehenderit accusantium, commodi
                repellendus quo
              </p>
            </div>
          </div>
          <div className='flex w-fit hover:shadow-lg  justify-between gap-[2rem] hover:bg-sky-100 m-5 px-5 cursor-pointer      pt-[1rem] '>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full'>
              <FaUser color='rgb(4,16,69)' size={40} />
            </div>
            <div className='flex gap-2 capitalize h-full w-full items-start  justify-between'>
              <h1 className='text-slate-800 w-3rem capitalize font-bold text-3xl '>
                mr oshodi{" "}
              </h1>
              <p className='block m-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem numquam libero reprehenderit accusantium, commodi
                repellendus quo
              </p>
            </div>
          </div>
          <div className='flex w-fit hover:shadow-lg  justify-between gap-[2rem] hover:bg-sky-100 m-5 px-5 cursor-pointer      pt-[1rem] '>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full'>
              <FaUser color='rgb(4,16,69)' size={40} />
            </div>
            <div className='flex gap-2 capitalize h-full w-full items-start  justify-between'>
              <h1 className='text-slate-800 w-3rem capitalize font-bold text-3xl '>
                mr oshodi{" "}
              </h1>
              <p className='block m-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem numquam libero reprehenderit accusantium, commodi
                repellendus quo
              </p>
            </div>
          </div>{" "}
          <div className='flex w-fit hover:shadow-lg  justify-between gap-[2rem] hover:bg-sky-100 m-5 px-5 cursor-pointer      pt-[1rem] '>
            <div className='flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full'>
              <FaUser color='rgb(4,16,69)' size={40} />
            </div>
            <div className='flex gap-2 capitalize h-full w-full items-start  justify-between'>
              <h1 className='text-slate-800 w-3rem capitalize font-bold text-3xl '>
                mr oshodi{" "}
              </h1>
              <p className='block m-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem numquam libero reprehenderit accusantium, commodi
                repellendus quo
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
