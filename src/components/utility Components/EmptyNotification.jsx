import React from 'react'

const EmptyNotification = () => {
  return (
    <div className='absolute z-30 md:top-[7rem] top-[3rem] w-[20rem] left-[6rem] md:right-[-92rem] md:h-[30vw] h-[60vh] bg-gray-100  m-auto rounded-md md:w-min  justify-between overflow-y-scroll    shadow-md flex flex-col my-3 items-start'>
      <h1 className='capitalize text-4xl text-center'>nothing is here yet</h1>
      <p className='text-xl text-gray-300 text-center '>
        you will see notifications here soo
      </p>
    </div>
  );
}

export default EmptyNotification