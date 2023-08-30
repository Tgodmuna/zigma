/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import IndexPage from "./components/IndexPage";
import {DashBoard, DashBoardContents} from "./components/DashBoard/DashBoard";
import LoginForm from "./components/Logins/Sign_in";
import SignUP from "./components/Logins/Signup";
import Wallet from "./components/DashBoard/Wallet";
import KYC from "./components/KYC/KYC";
import AddressForm from "./components/KYC/AddressVerification";
import BusinessInfo from "./components/KYC/BusinessInfo";
import CreatePassword from "./components/Logins/CreatePassword";
import IdentityVerification from "./components/KYC/IdentityVerification";
import Profile from "./components/Profile/Profile";
import ZigPinReset from "./components/Profile/ZigPinReset";
import AccountPasswordUpdate from "./components/Profile/AccountPasswordUPDt";
import Exchange from "./components/Exchange/Exchange";
import { Security } from "./components/Profile/Security";
import Setpin from "./components/KYC/SetPin";
export const AllContext = React.createContext();

function App() {
    const [state, setstate] = useState({
        logo: "/Assets/Images/zigmaLogo.jpeg",
        selfie: "/Asssets/Images/selfie.jpg",
        LandingPageImages: {
            image1: "/Assets/Images/zigmaPc.png",
            image2: "/Assets/Images/dollarBag.jpg"
        },
        UserDetails: {
            FirstName: "",
            SecondeName: "",
            isVerified: false,
            profilePics: null,
            balance: null,
            kyc: null,
            AccountNO: null,
            AccountBalance: 0
        },
        Notification: {}
    });
    return (
        <AllContext.Provider value={state}>
            <div className='App'>
                <Routes>
                    {/* Default route */}
                    <Route path='/' exact="exact" element={<IndexPage />}/> {/* Dashboard route */}
                    <Route path='/dashboard' element={<DashBoard />}>
                        {/* Sub-routes under the dashboard */}
                        <Route path="main" element={<DashBoardContents />}/>
                        <Route path='wallet' element={<Wallet />}/>
                        <Route path='exchange' element={<Exchange />}/>
                        <Route path='kyc' element={<KYC />}/>
                        <Route path='addressVerification' element={<AddressForm />}/>
                        <Route path='business' element={<BusinessInfo />}/>
                        <Route path='IDVerification' element={<IdentityVerification />}/>
                        <Route path='setPIN' element={<Setpin/>}/> 
                        <Route path='profile' element={<Profile />}/>
                        <Route path='security' element={<Security />}/>

                        <Route path='pinReset' element={<ZigPinReset />}/>
                        <Route path='passwordUPDATE' element={<AccountPasswordUpdate />}/>
                    </Route>
                    {/* Login route */}
                    <Route path='/login' element={<LoginForm />}/> {/* Signup route */}
                    <Route path='/signup' element={<SignUP />}/>
                    <Route path='createPassword' element={<CreatePassword />}/>
                </Routes>
            </div>
        </AllContext.Provider>
    );
}

export default App;
