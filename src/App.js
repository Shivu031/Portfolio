import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css';
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode=()=>{

    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
    <Navbar isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/skills" element={<Skills/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
