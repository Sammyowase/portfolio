// import React from "react";
// import './Hero.css';

// const Hero = () => {
//   return (
//     <section id="hero" className="hero">
//       <div className="hero-content fade-in">
//         <h1>Hello, I'm Samuel</h1>
//         <p>Frontend Engineer with a passion for creating visually stunning, user-friendly websites.</p>
//         <a href="#projects">
//           <button className="cta-btn">See My Work</button>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import "./Hero.css"
import image from "../assets/IMG_20240119_144414.jpg"

const Hero =()=>{
    return(
        <div>
        <div className="heroBar">
            <div className="TextBox">
       <h1> Hi, I'm
         <span> Samuel</span></h1>
        <p>
        A Frontend Engineer with a passion for creating visually stunning, user-friendly websites.</p>
            </div>
            <div className="imageBox">
        <img src={image  } alt="" />
            </div>
            
        </div>
        <a href="#projects">   <button className="cta-btn">See My Work</button>
            </a>
        </div>
    )
}

export default Hero;