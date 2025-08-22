const ProjectSection = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>
            React and Tailwind app, integrates Swiggy live API, and many features.
          </p>
        </div>
        <div className="project-card">
          <h3>Real-time Bus Tracking</h3>
          <p>Flutter app with live maps, bus locations, and route tracking.</p>
        </div>

        <div className="project-card">
          <h3 className="projectHead">Portfolio Website</h3>
          <p>
            A responsive, animated portfolio to showcase my skills and projects.
          </p>
          <div className="project-links">
            <a href="https://iamrithikk.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/rithikku/Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3 className="projectHead">Netflix-Gpt Platform</h3>
          <p>
            Built with React.js, featuring movie rendering management.
          </p>
          <div className="project-links">
            <a href="https://netflix-gpt-demo.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="https://github.com/rithikku/React-Code" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
