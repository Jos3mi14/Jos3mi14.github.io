import { Link } from "react-router-dom";
import FadeInView from "../shared/FadeInView";
import SpotlightCard from "../reactbits/SpotlightCard";
import StarBorder from "../reactbits/StarBorder";
import type { ProjectsData } from "../../data/portfolioData";

interface ProjectsSectionProps {
  data: ProjectsData;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <div className="container section-header">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>{data.title}</h2>
      </div>
      <div className="container projects-grid">
        {data.projects.map((project, index) => (
          <FadeInView key={project.id} direction="up" delay={index * 0.15}>
            <SpotlightCard
              spotlightColor={project.spotlightColor}
              className="project-card"
            >
              <div className="project-head">
                <span className="pill">{project.tag}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stats">
                {project.stats.map((stat, i) => (
                  <div key={i} className="project-stat">
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
              <div className="project-links">
                {project.links.map((link, i) => (
                  <Link
                    key={i}
                    to={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SpotlightCard>
          </FadeInView>
        ))}
      </div>
      <FadeInView direction="up" delay={0.2}>
        <div className="container more-projects">
          <StarBorder
            as="a"
            color="var(--accent)"
            speed="5s"
            href={data.githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.githubLink.label}
          </StarBorder>
        </div>
      </FadeInView>
    </section>
  );
}
