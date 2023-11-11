import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import skills from "./skilldata";
import "./skills.css";

const Skills = () => {
  const page = usePage();
  const [currentTitle, setCurrentTitle] = useState("");
  const [animatedTitle, setAnimatedTitle] = useTextAnimation("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * skills.length);
      setCurrentTitle(skills[randomIndex].title);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => setAnimatedTitle(currentTitle), [currentTitle]);

  return (
    <section className={page === "Skills" ? "visible" : "invisible"}>
      <div className="skill-grid">
        {skills.map((skill, i) => (
          <div className="skill" key={i}>
            <h3>
              {skill.title === currentTitle ? animatedTitle : skill.title}
            </h3>
            <small>{skill.description}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
