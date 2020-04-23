import React from "react";
import profPic from "../images/profilepic.jpg";

function Header() {

    return (
        <div className="container">
            <img src={profPic} className="propic" alt="Profile Picture" />
        </div>
    )
}

export default Header;