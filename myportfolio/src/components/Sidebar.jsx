import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Sidebar = ({ toggle, setToggle }) => {
  const test = () => {
    setToggle(false);
  };

  return (
    <Container>
      <Naviga>
      <Styledlink>
      <a href="/hero" onClick={test}>Home</a>
        </Styledlink>

        <Styledlink>
        <a href="/about" onClick={test}>About</a>
        </Styledlink>

        <Styledlink>
      <a href="/skills" onClick={test}>Tech Stack</a>
        </Styledlink>

        <Styledlink>
        <a href="/projects" onClick={test}>Projects</a>
        </Styledlink>

        <Styledlink>
        <a href="/contact" onClick={test}>Contact</a>
        </Styledlink>

        <Styledlink>
        <a href="http://github/sammyowase"><FaGithub /></a>
        </Styledlink>
        

        <Styledlink>
        <a href="http://"><FaLinkedin /></a>
        </Styledlink>

       
      </Naviga>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding-left: 20px;
`;




// const Sighin = styled.div`
//   button {
//     padding: 16px 30px;
//     background-color: #d3d3d365;
//     color: #40196d;
//     font-size: 12px;
//     font-weight: bold;
//     border-radius: 10px;
//     border: none;
//     margin-left: 20px;
//     margin-bottom: 50px;
//     cursor: pointer;
//     &:hover {
//       transform: translateY(-2px);
//     }
//   }
// `;

const Naviga = styled.div``;

 const Styledlink = styled.div`
  text-decoration: none;
  a {
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