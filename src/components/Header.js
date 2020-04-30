import React from "react";
import profPic from "../images/profilepic.jpg";
import Navbar from "./Navbar";

function Header() {

    return (
        <div className="back">
            <img src={profPic} className="propic" alt="Profile Picture" />
        <div className="container front">
        </div>
            <Navbar />
        </div>
    )
}

export default Header;