import { experienceData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section 
    className="experience">
      <section id="experience" 
      className="experience" 
      data-reveal></section>
      <SectionHeader
        title="Professional Experience"
        subtitle="Internships and hands-on experience through real-world projects"
      />

      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content card">
              <span className="timeline-duration">{exp.duration}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="timeline-location">{exp.location}</p>

              <ul>
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}