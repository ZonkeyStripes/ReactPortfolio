import React from "react";
import logo from "../logo.svg";
import '../App.css';
// import { render } from "@testing-library/react";

function Footer() {

    return (
      <div className="Appfoot">
        <header className="App-footer">
          <p>
          <img src={logo} className="App-logo" alt="logo" />
            Copyright &copy;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          </p>
        </header>
      </div>
    )
};

export default Footer;