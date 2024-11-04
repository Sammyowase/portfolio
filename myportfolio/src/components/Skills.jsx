
import './Skills.css';

const skills = ["JavaScript", "React", "CSS", "HTML", "Responsive Design", "UI/UX Basics"];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
