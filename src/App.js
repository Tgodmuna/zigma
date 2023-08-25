/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import React, { useState } from "react";
import { DashBoard } from "./components/DashBoard/DashBoard";
import Profile from "./components/Profile/Profile";

export const AllContext = React.createContext();

function App() {
  const [state, setstate] = useState({
    logo: "/Assets/Images/zigmaLogo.jpeg",
    selfie: "/Asssets/Images/selfie.jpg",
    LandingPageImages: {
      image1: "/Assets/Images/zigmaPc.png",
      image2: "/Assets/Images/dollarBag.jpg",
    },
    UserDetails: {
      FirstName: "",
      SecondeName: "",
      isVerified: false,
      profilePics: null,
      balance: null,
      kyc: null,
      AccountNO: null,
      AccountBalance: 0,
    },
    Notification: {},
  });
  return (
    <AllContext.Provider value={state}>
      <div className='App '>
        <Profile/>
        {/* <Routes>
          <Route path='/' exact element={<Landing_page />} />
          <Route path='/dashboard' element={<DashB />}></Route>
          <Route path='KYC' element={<KYC />} />
          <Route
            path='Identity_verification'
            element={<IdentityVerification />}
          />
          <Route path='AddressVerification' element={<AddressVerification />} />
          <Route path='set_pin' element={<SetPin />} />
          <Route path='BusinessInfo' element={<BusinessInfo />} />
        </Routes> */}
      </div>
    </AllContext.Provider>
  );
}

export default App;
