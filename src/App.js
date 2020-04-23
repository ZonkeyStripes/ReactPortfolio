import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Slides from "./components/Slides";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
    <Navbar />
    <Body />
    <Slides />
    <Footer />
    </div>
  );
}

export default App;
