import "./styles/App.css"
import "./styles/Header.css"
import "./styles/Footer.css"
import "./styles/Home.css"
import "./styles/Login.css";
import "./styles/SignUp.css";
import "./styles/Profile.css"
import "./styles/Location.css"
import "./styles/Scanner.css"
import "./styles/BuyUnits.css"
import "./styles/ContactUs.css"
import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Profile, Location, Scanner, BuyUnits, ContactUs } from "./pages";
import Form from "./pages/form";
import React, { useState } from "react";

export default function App() {

  const [user, setLoginUser] = useState();
  console.log(user);

  return (
    <>
      <Routes>
        <Route path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} user={user}/>: <Login setLoginUser={setLoginUser} />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/location" element={<Location />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/buy-units" element={<BuyUnits />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}