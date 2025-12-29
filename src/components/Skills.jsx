import { skillsData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies I work with to build scalable and reliable applications"
      />

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div className="skill-card card fade-up" key={index}>
            <h3 className="skill-category">{group.category}</h3>

            <div className="skill-items">
              {group.items.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}