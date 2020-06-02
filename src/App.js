import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />      
    <div className="container">
      <Switch>
    <Route exact path = {"/"} component={Home}/>
    <Home />
      </Switch>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
