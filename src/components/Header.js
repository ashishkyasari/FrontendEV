import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Home from "../images/Home.svg"
import Location from "../images/Location.svg"
import Scanner from "../images/Scanner.svg"
import BuyUnits from "../images/BuyUnits.svg"
import ContactUs from "../images/ContactUs.svg"
import Profile from "../images/Profile.svg"
import Form from "../pages/form";

function Header() {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <header id="homepage-header">
            <nav id="navbar-left" className="navbar"><Link id="nav-heading" to="/"><h3>The ChargeIt</h3></Link></nav>
            <nav id="navbar-right" className="navbar">
                <ul id="nav">
                    {(width >= 480) ? (
                        <>
                            <li className={splitLocation[1] === "" ? "navbar-active" : ""}><Link className="nav-links" to="/">Home</Link></li>
                            <li className={splitLocation[1] === "buy-units" ? "navbar-active" : ""}><Link className="nav-links" to="/buy-units">Units</Link></li>
                            <li className={splitLocation[1] === "form" ? "navbar-active" : ""}><Link className="nav-links" to="/form">Form</Link></li>
                            <li className={splitLocation[1] === "scanner" ? "navbar-active" : ""}><Link className="nav-links" to="/scanner">Scanner</Link></li>
                            <li className={splitLocation[1] === "contact-us" ? "navbar-active" : ""}><Link className="nav-links" to="/contact-us">Contact</Link></li>
               
                        </>
                    ) : (<>
                        <li className={splitLocation[1] === "form" ? "navbar-active" : ""}><Link className="nav-links" to="/form"><img src={Form} alt="" /></Link></li>
                        <li className={splitLocation[1] === "scanner" ? "navbar-active" : ""}><Link className="nav-links" to="/scanner"><img src={Scanner} alt="" /></Link></li>
                    </>)}
                </ul>
            </nav>
            <nav id="navbar-bottom" className="navbar">
                <ul id="nav">
                    <li className={splitLocation[1] === "" ? "navbar-active" : ""}><Link className="nav-links" to="/"><img src={Home} alt="" /></Link></li>
                    <li className={splitLocation[1] === "buy-units" ? "navbar-active" : ""}><Link className="nav-links" to="/buy-units"><img src={BuyUnits} alt="" /></Link></li>
                    <li className={splitLocation[1] === "contact-us" ? "navbar-active" : ""}><Link className="nav-links" to="/contact-us"><img src={ContactUs} alt="" /></Link></li>
                    <li className={((splitLocation[1] === "login") || (splitLocation[1] === "signup")) ? "navbar-active" : ""}><Link className="nav-links" to="/login"><img src={Profile} alt="" /></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;