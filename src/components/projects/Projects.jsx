import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import projects from "./projectdata";
import useTextAnimation from "../../animations/useTextAnimation";
import "./projects.css";

const Projects = () => {
  const page = usePage();
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentTitle, setCurrentTitle] = useTextAnimation("");
  const [animatedTitle, setAnimatedTitle] = useTextAnimation("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * projects.length);
      setCurrentTitle(projects[randomIndex].title);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => setAnimatedTitle(currentTitle), [currentTitle]);

  return (
    <section
      className={`projects--section ${
        page === "Projects" ? "visible" : "invisible"
      }`}
    >
      <div className="project--titles">
        {projects.map((project, i) => (
          <h3
            key={i}
            onClick={() => setSelectedProject(i)}
            className={`project--title ${
              selectedProject === i ? "active-title" : ""
            }`}
          >
            {project.title === currentTitle ? animatedTitle : project.title}
          </h3>
        ))}
      </div>

      {projects.map((project, i) => (
        <div
          key={i}
          className="project--info"
          style={{ display: selectedProject === i ? "block" : "none" }}
        >
          <small className="project--description">{project.description}</small>

          <div className="project--links">
            {project.github && project.live ? (
              <>
                <a
                  href={project.github}
                  className="project--link"
                  target="_blank"
                >
                  View Github
                </a>

                <a
                  href={project.live}
                  className="project--link"
                  target="_blank"
                >
                  View site
                </a>
              </>
            ) : (
              <p>In progress, coming soon ...</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
