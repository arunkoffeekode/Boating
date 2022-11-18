import React from 'react'
import Navber from './component/Navber';
import Footer from './component/Footer';
import Home from './pages/Home';
import ConfirmBooking from './pages/ConfirmBooking';
import CustomerDetails from './pages/CustomerDetails';
import BookingSummary from './pages/BookingSummary';
import PaymentMethod from './pages/PaymentMethod';
import Verification from './pages/Verification';
import SelectBoat from './pages/SelectBoat';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Account from './pages/Account';
import Forgot from './pages/Forgot';
import CreateNewPassword from './pages/CreateNewPassword';
import VerifyCode from './pages/VerifyCode';
import Timer from './pages/Timer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
   <Navber></Navber>
   <Home/>
   {/* <ConfirmBooking/> */}
   {/* <CustomerDetails/> */}
   {/* <BookingSummary/> */}
   {/* <PaymentMethod/> */}
   {/* <Verification/> */}
   {/* <SelectBoat/> */}
   {/* <Registration/> */}
   {/* <Login/> */}
   {/* <Account/> */}
   {/* <Forgot/> */}
   {/* <CreateNewPassword/> */}
   {/* <VerifyCode/> */}
   {/* <Timer/> */}
   <Footer/>
    </>
  );
}

export default App;
