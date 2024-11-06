import ProjectCard from './ProjectCard';
import './Projectss.css';


const projectData = [
    
    {   
        
        title: 'Map Project',
        description: 'An interactive map project that displays real-time data from a custom API.',
        techStack: 'HTML, JavaScript, SASS, CSS',
         liveLink: 'https://sammyowase.github.io/MapProject/', 
        codeLink: '#'
      },
      {
       
        title: 'Kuda App Clone',
        description: 'A functional clone of the popular Kuda app with a responsive design.',
        techStack: ' JavaScript, SASS, React, CSSt',
        liveLink: 'https://kuda_app_clone.surge.sh/', 
        codeLink: '#'
      },
      {
        
        title: 'Funiro',
        description: 'A beautiful UI/UX project focusing on furniture design and e-commerce.',
        techStack: 'HTML, JavaScript, SASS, CSS',
        liveLink: 'https://sammyowase.github.io/Funiro/', 
        codeLink: '#'
      },
      {
      
        title: 'Nexcent',
        description: 'A sleek, modern business website built for showcasing professional services.',
        techStack: 'HTML, CSS, SASS ',
        liveLink: 'https://sammyowase.github.io/Nexcent/', 
        codeLink: '#'
      },
      {
        
        title: 'Add To Cart',
        description: 'An e-commerce feature simulation that demonstrates adding products to a cart.',
        techStack: 'HTML, JavaScript, SASS, CSS',
        liveLink: 'https://sammyowase.github.io/Add_To_Cart/', 
        codeLink: '#'
      }
    ];
  


const Projectss = () => {
    return (
        <section id='projects' className="projects-section">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        techStack={project.techStack}
                        liveLink={project.liveLink}
                        
                    />
                ))}
            </div>
        </section>
    );
};

export default Projectss;
