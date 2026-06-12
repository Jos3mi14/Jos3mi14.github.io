import FadeInView from "../shared/FadeInView";
import type { SkillsData } from "../../data/portfolioData";

interface SkillsSectionProps {
  data: SkillsData;
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="section">
      <div className="container section-header">
        <p className="eyebrow">{data.eyebrow}</p>
        <h2>{data.title}</h2>
        <p className="section-lede">{data.lede}</p>
      </div>
      <div className="container skills-grid">
        {data.categories.map((category, index) => (
          <FadeInView
            key={category.category}
            direction="up"
            delay={index * 0.12}
          >
            <div className="skill-card">
              <div className="card-top">
                <span className="pill">{category.category}</span>
                <i className={category.icon} aria-hidden="true"></i>
              </div>
              <div className="tag-list">
                {category.technologies.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
