import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const KYC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=' bg-transparent md:m-auto md:h-screen'>
        <div
          onClick={() => {
            navigate("/dashboard/main");
          }}
          className='flex cursor-pointer items-start justify-start mb-[2rem] mt-[7rem]'>
          <FaAngleLeft size={40} />
          <p className='text-2xl text-[rgb(4,16,60)] text-center text-mono capitalize'>
            back
          </p>
        </div>
        <div className='item-center justify-center md:items-start md:justify-start  flex flex-col '>
          <h1 className='md:font-bold font-semibold font-sans text-2xl md:text-4xl text-[rgb(4,16,60)]b capitalize '>
            verify your account
          </h1>
          <p className='md:text-3xl text-justify text-slate-400 mt-[10px]'>
            {" "}
            once these steps are complete you will be able to submit
          </p>
        </div>

        <div className='flex flex-col w-full md:w-0 gap-[4rem] mt-14'>
          <div className='flex md:flex-row w-full flex-col gap-[4rem] '>
            <div className=" w-"
              onClick={() => {
                navigate("/dashboard/IDVerification");
              }}
              tabIndex={3}>
              <KYCCard title='identity Verification' text={"Set Identity"} />
            </div>
            <div onClick={() => navigate("/dashboard/addressVerification")}>
              <KYCCard
                title='address verification'
                text='verify your address'
              />
            </div>
          </div>


          <div className='flex md:flex-row flex-col  gap-[4rem]'>
            <div
              onClick={() => {
                navigate("/dashboard/Setpin");
              }}>
              <KYCCard title='set pin' text='set your transaction pin' />
            </div>
            <div onClick={() => navigate("/dashboard/Business")}>
              <KYCCard
                title='Business information'
                text='provide business info to increase your limits'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const KYCCard = ({ title, text }) => {
  return (
    <>
      <div className='bg-gray-100 hover:bg-gray-300 rounded-2xl md:w-[25vw] md:p-6 shadow-md m-3 w-[24rem] md:py-[0rem] py-[2rem] flex items-center justify-between'>
        <div className='flex flex-col md:mx-0 mx-3 gap-[1rem] '>
          <h1 className='text-2xl capitalize text-left font-bold text-[rgb(4,16,68)]'>
            {title}
          </h1>
          <p className='text-gray-600 text-xl text-left '>{text}</p>
        </div>
        <div className=' md:mx-0 mx-3 flex items-end justify-end text-gray-600'>
          <FaAngleRight size={40} />
        </div>
      </div>
    </>
  );
};
export default KYC;
