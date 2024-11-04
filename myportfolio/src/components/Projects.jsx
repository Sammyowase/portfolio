import './Projects.css';
import image from "../assets/download.jpg"

const projects = [
  {
    title: "Kuda App Clone",
    description: "Kuda App Clone is a web-based interface inspired by the Kuda banking app. This project replicates key features of the original app. An interactive web application using React.",
    link: "https://kuda_app_clone.surge.sh/",
  },
  {
    title: "Country/Map project",
    description:"Explore MapProject, an interactive web app designed to provide an intuitive mapping experience. Discover locations, search for destinations, and navigate easily with real-time map data.",
    link: "https://sammyowase.github.io/MapProject/"
  },
  {
    title: "Funiro e-commerce website",
    description: "Funiro is a modern e-commerce website concept for stylish furniture shopping. With a sleek interface and user-friendly layout.",
    link: "https://sammyowase.github.io/Funiro/",
  },
  {
    title: "Nexcent business-oriented website",
    description:"Nexcent is a sleek, business-oriented website designed to showcase services and solutions for modern companies.",
    link: "https://sammyowase.github.io/Nexcent/"
  },
  {
    title: "Shopping cart interface",
    description: "Add_To_Cart is a simple, interactivep shopping cart interface that lets users add and manage items effortlessly. This project demonstrates a streamlined e-commerce experience with a focus on usability and functionality",
    link: "https://sammyowase.github.io/Add_To_Cart/"
  }
 
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
