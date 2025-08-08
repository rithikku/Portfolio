const ProjectSection = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3 className="projectHead">E-commerce Platform</h3>
          <p>
            Built with MERN stack, featuring product management, cart, and
            payment gateway.
          </p>
        </div>
        <div className="project-card">
          <h3 className="projectHead">Real-time Bus Tracking</h3>
          <p>Flutter app with live maps, bus locations, and route tracking.</p>
        </div>
        <div className="project-card">
          <h3 className="projectHead">Portfolio Website</h3>
          <p>
            A responsive, animated portfolio to showcase my skills and projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
