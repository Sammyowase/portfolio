import "./Hero.css"
// import image from "../assets/IMG_20240119_144414.jpg"

const Hero =()=>{
    return(
        <div id="hero">
        <div  className="heroBar">
            <div className="TextBox">
       <h1> Hi, I'm
         <span> Samuel</span></h1>
        <p>
        Software Engineer with a talent for blending visual appeal with seamless functionality. Passionate about creating engaging, user-friendly websites, I focus on crafting digital experiences that leave a lasting impression and make technology feel effortless</p>

        <a href="#projects">   <button className="cta-btn">See My Work</button>
        </a>
            </div>
            <div className="imageBox">
        <img src="/myphoto.jpg" alt="" />
            </div>
            
        </div>
        
        </div>
    )
}

export default Hero;