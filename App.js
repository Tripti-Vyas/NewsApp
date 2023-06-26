import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FetchData from "./components/FetchData";
import Basic from './components/Basic';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          
          <Route exact path="/home" element={<Home/>} />
          <Route path="/general" element={<FetchData Topic="General" />}/>
          {/* <Route path="/Education" element={<FetchData Topic="Education" />}/> */}
          <Route path="/Technology" element={<FetchData Topic="Technology" />}/>
          <Route path="/Health" element={<FetchData Topic="Health" />}/>
          <Route path="/Sports" element={<FetchData Topic="Sports" />}/>
          <Route path="/Entertainment" element={<FetchData Topic="Entertainment" />}/>
          <Route path="/Business" element={<FetchData Topic="Business" />}/>
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
