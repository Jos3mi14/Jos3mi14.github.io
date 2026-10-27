import Reveal from "../shared/Reveal";
import Icon from "../shared/Icon";
import type { ProjectsData } from "../../data/portfolioData";

interface ProjectsSectionProps {
  data: ProjectsData;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-index">03 — {data.eyebrow}</p>
          <h2>{data.title}</h2>
        </div>

        <div className="projects-list">
          {data.projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <article className="project-row">
                <div className="project-head">
                  <span className="pill">{project.tag}</span>
                  <h3 className="project-title">{project.title}</h3>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) =>
                        link.isExternal ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                            <Icon name="arrow-up-right" size={13} />
                          </a>
                        ) : (
                          <a key={link.label} href={link.href}>
                            {link.label}
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <p>{project.description}</p>

                  <div className="project-stats">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="project-stat">
                        <span className="project-stat-value">{stat.value}</span>
                        <span className="project-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-meta">
                    {project.techStack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="projects-cta">
            <a
              href={data.githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              {data.githubLink.label}
              <Icon name="arrow-up-right" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
