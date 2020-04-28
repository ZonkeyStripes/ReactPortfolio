import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./pages/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />
    <Navbar />
    <Body />
    <Footer />
    </div>
  );
}

export default App;
