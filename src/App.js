import { useState } from "react";

import './Styles/App.scss';
import Header from "./Components/Header";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";

function App() {

  

  return (
    <>
    <Router>
    <Header />
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/users" element={<Users/>} />


      </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
