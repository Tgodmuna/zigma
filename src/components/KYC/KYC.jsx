import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const KYC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=' bg-transparent m-auto h-screen'>
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
        <div className='items-start justify-start flex flex-col '>
          <h1 className='font-bold font-sans text-4xl text-[rgb(4,16,60)]b capitalize '>
            verify your account
          </h1>
          <p className='text-2xl text-slate-400 mt-[10px]'>
            {" "}
            once these steps are complete you will be able to submit
          </p>
        </div>

        <div className='flex flex-col gap-[4rem] mt-14'>
          <div className='flex gap-[4rem] '>
            <div
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
          <div className='flex gap-[4rem]'>
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
      <div className='bg-gray-100 hover:bg-gray-300 rounded-2xl w-[25vw] p-6 shadow-md  flex items-center justify-between'>
        <div className='flex flex-col gap-[1rem] '>
          <h1 className='text-2xl capitalize text-left font-bold text-[rgb(4,16,68)]'>
            {title}
          </h1>
          <p className='text-gray-600 text-xl text-left '>{text}</p>
        </div>
        <div className='flex items-end justify-end text-gray-600'>
          <FaAngleRight size={40} />
        </div>
      </div>
    </>
  );
};
export default KYC;
