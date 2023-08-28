import React, { useContext } from "react";
import { AllContext } from "../App";
import StepsComponent from "./utility Components/StepDown";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const IndexPage = () => {
  const [showMobile, setshowMobile] = useState(false);
  const handleMobileNav = () => {
    setshowMobile(true);
  };
  const hideMobileNav = () => {
    setshowMobile(false);
  };
  return (
    <div>
      <div
        className={`md:hidden  relative  cursor-pointer flex items-start justify-start w-[6rem] ${
          showMobile ? "hidden" : null
        } `}>
        <FaBars size={40} color='black' onClick={handleMobileNav} />
        <h1 className='font-bold uppercase text-3xl relative left-[8rem]'>Ziga</h1>
      </div>
      {showMobile && <MobileNav hide={hideMobileNav} />};
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default IndexPage;

//navBar
const NavBar = (props) => {
  const images = useContext(AllContext);
  const { logo } = images;
  return (
    <nav className='md:flex md: md:w-full  md:mb-[4rem]'>
      <div className='md:flex w-full '>
        <img
          src={logo}
          alt='zigma Logo'
          className=' hidden md:block md:rounded-3xl md:p-3 object-contain '
        />

        <ul className='hidden md:relative md:top-[1.5rem] md:justify-evenly  md:w-full md:flex md:flex-row    '>
          <li className='li_style '>how it works</li>
          <li className='li_style'>about us</li>
          <li className='li_style'>blog</li>
        </ul>
      </div>
      {/* signin and get started button */}
      <div className='flex  md:flex-row  justify-center items-center w-full flex-row  md:gap-5 md:mr-[7rem]'>
        <button
          type='button'
          className=' md:mr-0 md:h-[5rem]  w-[10rem] p-[1rem]   md:cursor-pointer mr-4 Btn'>
          <Link to={"login"} className=''>
            sign in{" "}
          </Link>
        </button>
        <button
          type='button'
          className='Btn text-gray-100 md:mr-0 mr-4 md:h-[5rem] bg-[rgb(4,16,61)]'>
          <Link to={"/signup"}> get started</Link>
        </button>
      </div>
    </nav>
  );
};

//mobile nav
const MobileNav = ({ hide }) => {
  const images = useContext(AllContext);
  const { logo } = images;
  return (
    <div className=' md:hidden fixed  left-[10rem] bg-slate-200 top-[0px] z-20  flex-col flex w-[57vw] h-[30rem]   '>
      <span className='-left-[-11rem] relative'>
        {" "}
        <FaTimes size={ 40 } onClick={ hide } />
      </span>
      <img
        src={logo}
        alt='zigma Logo'
        className='md mx-[10vw] rounded-3xl p-3 object-contain '
      />

      <ul className=' relative top-[1.5rem] w-full flex flex-col gap-[3rem] justify-center items-center '>
        <li className='li_style border rounded-md border-slate-500 p-2 '>
          how it works
        </li>
        <li className='li_style border rounded-md border-slate-500 p-2 '>
          about us
        </li>
        <li className='li_style border rounded-md border-slate-500 p-2 '>
          blog
        </li>
      </ul>
    </div>
  );
};
//section1
const Section1 = () => {
  const images = useContext(AllContext);
  const { LandingPageImages } = images;

  return (
    <section className='flex  md:p-[3rem] md:gap-[2rem] '>
      <div className='left hidden md:flex flex-col text-center md:w-[50vw]'>
        <p className='section1_pBold  md:w-full'>move money across</p>
        <p className='section1_pBold'>different countries</p>
        <p className='section1_pBold'>swiftly & securely</p>
        <p className=' relative text-justify m-auto  text-xl text-neutral-600 p-[4rem]  capitalize '>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere{" "}
          <br />
          corrupti dignissimos, soluta, incidunt quo dolorum dolores nobis esse
          <br />
          minus deleniti, itaque eaque quidem. Distinctio nostrum totam
          <br />
          provident accusantium eveniet excepturi?
        </p>
        <div>
          {" "}
          <button className='Btn text-gray-100 w-[458px] my-12 h-[7rem] mx-[-1rem] bg-[rgb(4,16,61)] '>
            Get started
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className='md:hidden flex flex-col justify-center items-center left text-center capitalize w-[50rem]  '>
        <p className='font-bold text-4xl text center w-full mb-3  '>
          move money across
        </p>
        <p className='font-bold text-3xl text center mb-3 '>
          different countries
        </p>
        <p className='font-bold text-3xl text center  '>swiftly & securely</p>
        <p className=' text-justify m-auto text-xl text-neutral-600 p-[2rem]  capitalize '>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere{" "}
          <br />
          corrupti dignissimos, soluta, incidunt quo dolorum dolores nobis esse
          <br />
          minus deleniti, itaque eaque quidem. Distinctio nostrum totam
          <br />
          provident accusantium eveniet excepturi?
        </p>
        <div>
          {" "}
          <button className=' w-[21.5rem] text-gray-100 h-[4rem] my-12 rounded  bg-[rgb(4,16,61)] '>
            Get started
          </button>
        </div>
      </div>
      <div className='right  hidden md:block w-[50vw] '>
        <img
          className='w-[40vw] m-4 object-contain rounded-3xl '
          src={LandingPageImages.image1}
          alt='user pressing a laptop'
        />
      </div>
    </section>
  );
};

//section2
const Section2 = () => {
  return (
    <section className=' flex flex-col md:w-full p-[2rem] justify-center md:my-[5rem]'>
      <h1 className='md:text-7xl  text-4xl w-full text-center font-semibold md:font-semibold text-neutral-950 font-serif '>
        why ziga?
      </h1>
      <p className='text-xl md:7xl text-center md:my-4 w-full '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,{" "}
        architecto blanditiis facilis consectetur nulla dolore non totam illum{" "}
      </p>
      <div className='cards my-[3rem] md:my-[6rem] md:justify-center flex items-center   md:auto flex-col md:flex-row gap-[8.2rem] w-full   '>
        <div className='md:w-[25rem] w-[13rem]  p-[7rem] md:p-[12rem] bg-gray-400 rounded-3xl'></div>
        <div className='md:w-[25rem] w-[13rem]  p-[7rem] md:p-[12rem] bg-gray-400 rounded-3xl'></div>
        <div className='md:w-[25rem] w-[13rem]  p-[7rem] md:p-[12rem] bg-gray-400 rounded-3xl'></div>
      </div>
    </section>
  );
};

//section 3
const Section3 = () => {
  return (
    <section className='flex gap-[26rem] w-full hidden '>
      <div className=' right bg-gray-500 rounded-2xl my-[2rem] mx-[4rem]  h-[85rem] w-[45rem]'></div>
      <div className='left w-[45vw] m-10  '>
        <StepsComponent />
      </div>
    </section>
  );
};

//section3
const Section4 = () => {
  return (
    <section className='flex md:w-full justify-center my-[1rem] md:my-[3rem]'>
      <div className=' m-[8rem] flex flex-col right w-[50rem] '>
        <h1 className='text-6xl capitalize mb-4 p-3 text-justify  text-neutral-950  font-bold'>
          here's how Ziga
        </h1>
        <p className='text-6xl capitalize mb-4 p-3 text-justify  text-neutral-950  font-bold'>
          helps businesses
        </p>
        <div className='m-auto'>
          <p className='text-2xl text-justify my-[2rem] capitalize text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            necessitatibus dignissimos eveniet laborum a quisquam ipsa quasi cum
            aspernatur, aperiam explicabo officiis beatae recusandae magni ea!
            Sit qui dicta ab.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel maxime, architecto blanditiis facilis consectetur nulla
            dolore non totam il
          </p>
          <p className='text-2xl text-justify my-[2rem] capitalize text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            necessitatibus dignissimos eveniet laborum a quisquam ipsa quasi cum
            aspernatur, aperiam explicabo officiis beatae recusandae magni ea!
            Sit qui dicta ab.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel maxime, architecto blanditiis facilis consectetur nulla
            dolore non totam il
            <p className='text-2xl text-justify my-[2rem] capitalize text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              necessitatibus dignissimos eveniet laborum a quisquam ipsa quasi
              cum aspernatur, aperiam explicabo officiis beatae recusandae magni
              ea! Sit qui dicta ab.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel maxime, architecto blanditiis facilis
              consectetur nulla dolore non totam il
            </p>
          </p>
        </div>
      </div>
      <div className='left w-[50rem] hidden md:block p-[3rem] h-[50rem] bg-slate-200 m-[8rem] rounded-2xl '></div>
    </section>
  );
};

//section5
const Section5 = () => {
  const [Sub, setSub] = useState({ email: "" });
  const images = useContext(AllContext);
  const { logo } = images;
  return (
    <section className='flex flex-col justify-evenly my-4 md:justify-center items-center'>
      <div className='  md:h-[35vh] justify-between w-full  md:w-[52vw] flex flex-col bg-[rgb(4,16,61)] rounded-[2rem] m-[2rem] p-[2rem]'>
        <p className='text-4xl md:my-2 mt-[-1rem] text-white font-semibold capitalize  text-center '>
          subscribe
        </p>
        <p className='md:m-[1rem]  md:text-xl text-white font-semibold capitalize p-3   text-center'>
          be the first to get all the latest insight & updates from ziga
        </p>
        <div className='flex gap-[1rem] w-full'>
          <input
            type='email'
            id='sub'
            name='subscription'
            value={Sub.email}
            autoCapitalize='true'
            autoFocus
            placeholder='email'
            className='rounded-lg w-full placeholder:text-center placeholder:capitalize placeholder:text-2xl bg-gray-200 p-[1rem] md:p-[1rem] '
            onChange={(e) => {
              setSub({ email: e.target.value });
              e.preventDefault();
            }}
          />
          <button
            className='Btn hidden md:inline text-gray-50 bg-purple-950 hover:bg-purple-900 '
            type='submit'
            onSubmit={""}>
            Subscribe
          </button>
          <button
            className=' text-gray-50 md:hidden w-[10rem] rounded-xl bg-purple-950 hover:bg-purple-900 '
            type='submit'
            onSubmit={""}>
            Subscribe
          </button>
        </div>
      </div>
      {/* footer */}
      <div className='flex md:flex-row  md:justify-between md:w-full '>
        <ul className='flex md:justify-evenly gap-4 md:gap-0  md:w-full mt-[10rem] m-0 md:mx-[3rem]'>
          <li className='hidden md:inline'>
            <img
              src={logo}
              alt='logo'
              className='w-full rounded-xl object-cover'
            />
          </li>
          <li className='flex flex-col text-sm gap-2 md:gap-4 capitalize md:text-xl   '>
            <p className='capitalize font-serif md:font-bold font-semibold'>
              contact us
            </p>{" "}
            <span>+2348137123445</span> support@zigah.com
          </li>
          <li className='text-sm md:text-xl capitalize font-serif font-semibold md:font-bold '>
            <a href='jsj'>Privacy</a>
          </li>
          <li className='text-sm md:text-xl capitalize font-serif font-semibold md:font-bold'>
            {" "}
            <a href='kjsks'>Terms</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
