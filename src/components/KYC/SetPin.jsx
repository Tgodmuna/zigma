import React, { useState } from "react";

const Setpin = () => {
  const [pins, setPins] = useState(["", "", "", ""]); // Initialize with four empty strings
  const [confirmPins, setConfirmPins] = useState(["", "", "", ""]); // Initialize with four empty strings

  const handlePinChange = (index, value) => {
    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Enable the next input field if the current input is filled
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin${index + 1}`);
      if (nextInput) {
        nextInput.removeAttribute("disabled");
        nextInput.focus();
      }
    }
  };

  const handleConfirmPinChange = (index, value) => {
    const newConfirmPins = [...confirmPins];
    newConfirmPins[index] = value;
    setConfirmPins(newConfirmPins);
  };

  const isSubmitDisabled = !pins.every(
    (pin, index) => pin === confirmPins[index],
  );

  return (
    <div className='pin-form mt-[15rem] flex flex-col justify-center items-center w-30vw '>
      <form className='flex flex-col pin-input-container m-auto mt-10'>
        <div>
          <header className='text-2xl capitalize font-semibold mb-4 text-left '>
            set PIN
          </header>

          {pins.map((pin, index) => (
            <input
              key={index}
              type='password'
              id={`pin${index}`}
              className='pin-input border-[3px] border-neutral-950 rounded-xl w-[5rem] h-[3rem]  text-2xl mx-[2rem] '
              maxLength='1'
              value={pin}
              onChange={(e) => handlePinChange(index, e.target.value)}
              disabled={index > 0 && !pins[index - 1]}
            />
          ))}
        </div>

        <div className='text-2xl font-semibold mt-[5rem] text-left mb-4'>
          Confirm Your PIN:
        </div>

        <div className='flex'>
          {confirmPins.map((confirmPin, index) => (
            <input
              key={index}
              type='password'
              id={`confirmPin${index}`}
              className='pin-input border-[3px] border-neutral-950 rounded-xl w-[5rem] h-[3rem] text-center text-2xl mx-[2rem] mt-4'
              maxLength='1'
              value={confirmPin}
              onChange={(e) => handleConfirmPinChange(index, e.target.value)}
              disabled={index > 0 && !confirmPins[index - 1]}
            />
          ))}
        </div>
        <button
          type='submit'
          className={`Btn submit-button bg-[rgb(5,16,78)] text-white text-2xl px-6 py-2 rounded-xl mt-5 ${
            isSubmitDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-900"
          }`}
          disabled={isSubmitDisabled}>
          done{" "}
        </button>
      </form>
    </div>
  );
};

export default Setpin;
