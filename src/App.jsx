
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projectss from './components/Projectss';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
const App =()=> {

  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme =()=>{
    setDarkMode(!darkMode)
  }
  return (
 <div className={darkMode ? 'dark-theme' : 'light-theme'}>
 {/* <h4 onClick={toggleTheme}>
     {darkMode ? <CiLight /> :<MdDarkMode />}
 </h4> */}
    <Header />
    <Hero />
    <About /> 
    <Projectss/>
    <Skills />
    <Contact />
     
    
    </div>
  );
}

export default App;
