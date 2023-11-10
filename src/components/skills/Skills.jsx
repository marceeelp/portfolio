import { useState, useEffect } from "react";
import { usePage } from "../../contexts/PageContext";
import useTextAnimation from "../../animations/useTextAnimation";
import skills from "./skilldata";
import "./skills.css";

const Skills = () => {
  const page = usePage();
  const [currentSkill, setCurrentSkill] = useState("");
  const [animatedSkill, setAnimatedSkill] = useTextAnimation("");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * skills.length);
      setCurrentSkill(skills[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => setAnimatedSkill(currentSkill), [currentSkill]);

  return (
    <section className={page === "Skills" ? "visible" : "invisible"}>
      <div className="skills--grid">
        {skills.map((skill, i) => (
          <div className="skills--skill" key={i}>
            <p className={skill === currentSkill ? "skills--current" : ""}>
              {skill === currentSkill ? animatedSkill : skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
