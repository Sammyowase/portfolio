// import styled from "styled-components";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Sidebar = ({ toggle, setToggle }) => {
//   const test = () => {
//     setToggle(false);
//   };

//   return (
//     <Container>
//       <Naviga>
//         <Styledlink>
//           <a href="#hero" onClick={test}>Home</a>
//         </Styledlink>

//         <Styledlink>
//           <a href="#about" onClick={test}>About</a>
//         </Styledlink>

//         <Styledlink>
//           <a href="#skills" onClick={test}>Tech Stack</a>
//         </Styledlink>

//         <Styledlink>
//           <a href="#projects" onClick={test}>Projects</a>
//         </Styledlink>

//         <Styledlink>
//           <a href="#contact" onClick={test}>Contact</a>
//         </Styledlink>

//         <Styledlink>
//           <a href="https://github.com/sammyowase"><FaGithub /></a>
//         </Styledlink>

//         <Styledlink>
//           <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
//         </Styledlink>
//       </Naviga>
//     </Container>
//   );
// };

// export default Sidebar;

// const Container = styled.div`
//   min-height: calc(100vh - 70px);
//   padding-left: 20px;
// `;

// const Naviga = styled.div``;

// const Styledlink = styled.div`
//   text-decoration: none;
//   a {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     cursor: pointer;
//     border-bottom: 1px solid lightgrey;
//     font-size: 16px;
//     font-weight: 500;
//     padding: 20px 0;
//     color: #40196d;
//   }
// `;


// Sidebar.jsx
import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Sidebar = ({ toggle, setToggle }) => {
  const closeSidebar = () => {
    setToggle(false);
  };

  return (
    <Container toggle={toggle}>
      <Naviga>
        <Styledlink>
          <ScrollLink to="hero" smooth={true} duration={500} onClick={closeSidebar}>
            Home
          </ScrollLink>
        </Styledlink>

        <Styledlink>
          <ScrollLink to="about" smooth={true} duration={500} onClick={closeSidebar}>
            About
          </ScrollLink>
        </Styledlink>

        <Styledlink>
          <ScrollLink to="skills" smooth={true} duration={500} onClick={closeSidebar}>
            Tech Stack
          </ScrollLink>
        </Styledlink>

        <Styledlink>
          <ScrollLink to="projects" smooth={true} duration={500} onClick={closeSidebar}>
            Projects
          </ScrollLink>
        </Styledlink>

        <Styledlink>
          <ScrollLink to="contact" smooth={true} duration={500} onClick={closeSidebar}>
            Contact
          </ScrollLink>
        </Styledlink>

        <Styledlink>
          <a href="https://github.com/sammyowase" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </Styledlink>

        <Styledlink>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </Styledlink>
      </Naviga>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding-left: 20px;
  display: ${({ toggle }) => (toggle ? "block" : "none")}; // Toggle sidebar visibility
`;

const Naviga = styled.div``;

const Styledlink = styled.div`
  text-decoration: none;
  a, div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-bottom: 1px solid lightgrey;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 0;
    color: #40196d;
  }
`;
