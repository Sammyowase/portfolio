import ProjectCard from './ProjectCard';
import './Projectss.css';
import image from "../assets/download.jpg"

const projectData = [
    {
        image: 'path-to-image1.jpg', 
        title: 'Project Title goes here',
        description: 'This is sample project description. Random things go here in description. This is sample project lorem ipsum generator for dummy content.',
        techStack: 'HTML, JavaScript, SASS, React',
        liveLink: '#', 
        codeLink: '#'
    },
    {   
        image: "../assets/download.jpg",
        title: 'Map Project',
        description: 'An interactive map project that displays real-time data from a custom API.',
        techStack: 'HTML, JavaScript, SASS, CSS',
         liveLink: 'https://sammyowase.github.io/MapProject/', 
        codeLink: '#'
      },
      {
        image: {image},
        title: 'Kuda App Clone',
        description: 'A functional clone of the popular Kuda app with a responsive design.',
        techStack: ' JavaScript, SASS, React, CSSt',
        liveLink: 'https://kuda_app_clone.surge.sh/', 
        codeLink: '#'
      },
      {
        image: {image},
        title: 'Funiro',
        description: 'A beautiful UI/UX project focusing on furniture design and e-commerce.',
        techStack: 'HTML, JavaScript, SASS, CSS',
        liveLink: 'https://sammyowase.github.io/Funiro/', 
        codeLink: '#'
      },
      {
        image: {image},
        title: 'Nexcent',
        description: 'A sleek, modern business website built for showcasing professional services.',
        techStack: 'HTML, CSS, SASS ',
        liveLink: 'https://sammyowase.github.io/Nexcent/', 
        codeLink: '#'
      },
      {
        image: {image},
        title: 'Add To Cart',
        description: 'An e-commerce feature simulation that demonstrates adding products to a cart.',
        techStack: 'HTML, JavaScript, SASS, CSS',
        liveLink: 'https://sammyowase.github.io/Add_To_Cart/', 
        codeLink: '#'
      }
    ];
  


const Projectss = () => {
    return (
        <section className="projects-section">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        liveLink={project.liveLink}
                        // codeLink={project.codeLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projectss;
