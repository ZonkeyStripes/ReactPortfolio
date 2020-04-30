import React from "react";
import "../App.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="https://github.com/ZonkeyStripes">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://www.linkedin.com/in/harley-cripe-53435b195/">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://en.uncyclopedia.co/">Funny Wikipedia Page</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;