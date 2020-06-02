import React from "react";
import "../App.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="https://github.com/ZonkeyStripes">Github</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/harley-cripe-53435b195/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="lastnav" href="https://en.uncyclopedia.co/">Uncyclopedia</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;