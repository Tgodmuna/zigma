import React, { useContext, useState } from "react";
import { AllContext } from "../../App";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const IdentityVerification = () => {
  const image = useContext(AllContext);
  const { selfie } = image;
  console.log(selfie);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showProceedOptions, setShowProceedOptions] = useState(false);
  const [showBvnInput, setShowBvnInput] = useState(false); // State to control BVN input
  const [bvn, setBvn] = useState(""); // BVN state

  const handleSelfieClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      videoElement.autoplay = true;

      document.getElementById("camera-holder").appendChild(videoElement);
      setCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleCapture = () => {
    const videoElement = document.querySelector("video");
    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext("2d").drawImage(videoElement, 0, 0);
    const capturedImageUrl = canvas.toDataURL("image/png");

    setCapturedImage(capturedImageUrl);
    videoElement.srcObject.getTracks()[0].stop(); // Stop the camera stream
    videoElement.remove(); // Remove the video element from DOM
    setCameraActive(false);
    setShowProceedOptions(true);
  };

  return (
    <div className='all flex flex-row justify-between m-auto items-center gap-5 bg-transparent rounded-lg p-6  text-center w-[50vw] h-screen'>
      <Link
        to={"/dashboard/kyc"}
        className='flex cursor-pointer items-start relative -top-[26rem] justify-start mb-[2rem] mt-[7rem]'>
        <FaAngleLeft size={40} />
        <p className='text-2xl text-[rgb(4,16,60)] text-center text-mono capitalize'>
          back
        </p>
      </Link>
      <div className='flex flex-col justify-between items-center gap-5  rounded-lg p-6 shadow-md text-center w-full h-[90vh]'>
        <div
          id='camera-holder'
          className={`rounded-full bg-gray-200 w-[20rem] h-[20rem] mx-auto mb-4 flex items-center justify-center `}>
          <img
            src={capturedImage || "Assets/Images/s.jpg"}
            alt='Avatar'
            className='w-[20rem] object-contain'
          />
        </div>
        <p className=' -mt-[6rem] -mb-[1rem] text-center text-3xl  capitalize font-bold text-[rgb(4,16,69)]'>
          selfie
        </p>

        <p className='text-gray-600 -mt-[6rem] w-[26rem] text-xl  mb-[3.5rem]'>
          Please, have your BVN ready and stay in a well-lit place. You will
          need to position your face within the camera frame.
        </p>
        <p className='text-sky-600  font-semibold text-2xl -mt-[4rem] '>
          we all need access to your device camera
        </p>
        {cameraActive ? (
          <button
            onClick={handleCapture}
            className='Btn bg-[rgb(4,16,67)] w-[25vw] -mt-[4rem] text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
            Capture Image
          </button>
        ) : (
          <button
            onClick={handleSelfieClick}
            className={`Btn bg-[rgb(4,16,67)] w-[25vw] -mt-[4rem] text-white py-2 px-4 rounded-lg hover:bg-blue-600`}>
            Take Selfie
          </button>
        )}
        {showProceedOptions && (
          <div className='flex mt-4 flex-col items-center'>
            <p className='text-lg mb-2'>
              Do you want to proceed with the captured image for verification?
            </p>
            <div className='flex gap-2'>
              <button
                onClick={() => {
                  // Proceed with the captured image for verification
                  console.log("Proceed with verification:", capturedImage);
                  setBvn(""); // Reset BVN input field
                  setShowBvnInput(true); // Show BVN input field
                }}
                className={`Btn bg-blue-500 w-[8rem] text-white py-2 px-3 rounded-lg hover:bg-blue-600`}>
                Yes
              </button>
              <button
                onClick={() => {
                  // Cancel the verification process
                  setCapturedImage(null);
                  setShowProceedOptions(false);
                }}
                className={`Btn bg-red-500 w-[8rem] text-white py-2 px-3 rounded-lg hover:bg-red-600`}>
                No
              </button>
            </div>
            {showBvnInput && (
              <div className='mt-3'>
                <input
                  type='text'
                  placeholder='Enter BVN'
                  className='border border-gray-400 px-2 py-1 rounded-md'
                  value={bvn}
                  onChange={(e) => setBvn(e.target.value)} // Handle BVN input change
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdentityVerification;
