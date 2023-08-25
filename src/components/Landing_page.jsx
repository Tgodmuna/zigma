import React, { useContext } from "react";
import { AllContext } from "../App";
import StepsComponent from "./utility Components/StepDown";
import { useState } from "react";

const Landing_page = () => {
  return (
    <div >
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Landing_page;

//navBar
const NavBar = (props) => {
  const images = useContext(AllContext);
  const { logo } = images;
  return (
    <nav className='flex justify-between mt-[2rem] mb-[4rem]'>
      <div className='flex'>
        <img
          src={logo}
          alt='zigma Logo'
          className=' mx-[10vw] rounded-3xl p-3 object-contain '
        />

        <ul className=' relative top-[1.5rem] w-full flex flex-row gap-[11.25rem]  '>
          <li className='li_style '>how it works</li>
          <li className='li_style'>about us</li>
          <li className='li_style'>blog</li>
        </ul>
      </div>
      {/* signin and get started button */}
      <div className='flex gap-5 mr-[7rem]'>
        <button type='button' className='Btn'>
          sign in{" "}
        </button>
        <button type='button' className='Btn text-gray-100  bg-[rgb(4,16,61)]'>
          get started
        </button>
      </div>
    </nav>
  );
};

//section1
const Section1 = () => {
  const images = useContext(AllContext);
  const { LandingPageImages } = images;

  return (
    <section className='flex  gap-[12rem] '>
      <div className='left w-[50vw]'>
        <p className='section1_pBold'>move money across</p>
        <p className='section1_pBold'>different countries</p>
        <p className='section1_pBold'>swiftly & securely</p>
        <p className=' relative -right-[12rem] text-justify m-auto text-xl text-neutral-600 p-[4rem]  capitalize '>
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
      <div className='right w-[50vw] '>
        <img
          className='w-[40vw] m-4 rounded-3xl '
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
    <section className='flex flex-col w-full p-[5rem] justify-center my-[5rem]'>
      <h1 className='text-7xl   font-semibold text-neutral-950 font-serif '>
        why ziga?
      </h1>
      <p className='text-4xl text-center my-10 w-full '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime,{" "}
        architecto blanditiis facilis consectetur nulla dolore non totam illum{" "}
      </p>
      <div className='cards my-[6rem] justify-center flex flex-row gap-[8.2rem] w-full   '>
        <div className='w-[25rem] p-[12rem] bg-gray-400 rounded-3xl'></div>
        <div className='w-[25rem] p-[12rem] bg-gray-400 rounded-3xl'></div>
        <div className='w-[25rem] p-[12rem] bg-gray-400 rounded-3xl'></div>
      </div>
    </section>
  );
};

//section 3
const Section3 = () => {
  return (
    <section className='flex gap-[26rem] w-full '>
      <div className=' right bg-gray-500 rounded-2xl my-[2rem] mx-[4rem]  h-[85rem] w-[45rem]'></div>
      <div className='left w-[45vw] m-10 '>
        <StepsComponent />
      </div>
    </section>
  );
};

//section3
const Section4 = () => {
  return (
    <section className='flex  w-full my-[3rem]'>
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
      <div className='left w-[50rem] p-[3rem] h-[50rem] bg-slate-200 m-[8rem] rounded-2xl '></div>
    </section>
  );
};

//section5
const Section5 = () => {
  const [Sub, setSub] = useState({ email: "" });
 const images = useContext(AllContext);
 const { logo } = images;
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className=' h-[35vh] justify-between w-[52vw] flex flex-col bg-[rgb(4,16,61)] rounded-[2rem] m-[2rem] p-[2rem]'>
        <p className='text-3xl mb-[-4rem] text-white font-semibold capitalize  text-center '>
          subscribe
        </p>
        <p className='m-[1rem] text-xl text-white font-semibold capitalize p-3  text-center'>
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
            className='rounded-lg w-full placeholder:text-center placeholder:capitalize placeholder:text-2xl bg-gray-200 p-[1rem] '
            onChange={(e) => {
              setSub({ email: e.target.value });
              e.preventDefault();
            }}
          />
          <button
            className='Btn text-gray-50 bg-purple-950 hover:bg-purple-900 '
            type='submit'
            onSubmit={""}>
            Subscribe
          </button>
        </div>
      </div>
      {/* footer */}
      <div className='flex justify-between w-full '>
        <ul className='flex justify-evenly w-full mt-[10rem] mx-[3rem]'>
          <li>
            <img src={logo} alt='logo' className="w-full rounded-xl object-cover" />
          </li>
          <li className='flex flex-col gap-4 capitalize text-xl   '>
            <p className='text-xl capitalize font-serif font-bold'>
              contact us
            </p>{" "}
            <span>+2348137123445</span> support@zigah.com
          </li>
          <li className='text-xl capitalize font-serif font-bold '>
            <a href='jsj'>Privacy</a>
          </li>
          <li className='text-xl capitalize font-serif font-bold'>
            {" "}
            <a href='kjsks'>Terms</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
