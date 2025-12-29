import { projectsData } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="projects" data-reveal>
      <SectionHeader
        title="Selected Projects"
        subtitle="Projects that demonstrate practical skills and problem solving"
      />

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card card fade-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3 className="project-title">🚀 {project.title}</h3>

            <p className="project-description">{project.description}</p>

            {/* TECH STACK */}
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            {/* CATEGORY */}
            {project.category && (
              <div className="project-category">
                {project.category}
              </div>
            )}

            {/* LINKS */}
            <div className="project-links">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      GitHub → Check Here👉
    </a>
  )}
</div>
          </div>
        ))}
      </div>
    </section>
  );
}