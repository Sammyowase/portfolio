// import { IoReorderTwoOutline } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
// import "./Header.css"
// import Sidebar from "../components/Sidebar"
// import { useState } from "react";
// const Header =()=>{
//     const [toggle, setToggle] =  useState (false);
//     const Handletoggle =()=>{
//         setToggle(!toggle)
//     };
    
//     return(
//         <>
//         <div className="Navigation">
//             <div className="logo">
//             <h1>SAMUEL OWASE</h1>
//             </div>
//         <div>
        
//             <nav className="navBar">
//             <a href="#hero">Home</a>
//             <a href="#about">About</a>
//             <a href="#skills">Tech Stack</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>
//             <a href="http://github.com/sammyowase" ><FaGithub /></a>
//             <a href="http://" ><FaLinkedin /></a>
        
//             <div className="icon" onClick={Handletoggle} > <IoReorderTwoOutline /></div>
            
//             </nav>
            
//             </div>
           
//         </div>
//          {toggle === false ? null : <Sidebar toggle={toggle} setToggle={setToggle} />}
//          </>
//     )
// }

// export default Header; 

import { IoReorderTwoOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Header.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="Navigation">
        <div className="logo">
          <h1>SAMUEL OWASE</h1>
        </div>
        <div>
          <nav className="navBar">
            <ScrollLink to="hero" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500}>
              Tech Stack
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
            <a href="https://github.com/sammyowase" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <div className="icon" onClick={handleToggle}>
              <IoReorderTwoOutline />
            </div>
          </nav>
        </div>
      </div>

      {toggle && <Sidebar toggle={toggle} setToggle={setToggle} />}
    </>
  );
};

export default Header;

