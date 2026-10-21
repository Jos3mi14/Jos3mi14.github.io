import Reveal from "../shared/Reveal";
import Icon from "../shared/Icon";
import type { SkillsData } from "../../data/portfolioData";

interface SkillsSectionProps {
  data: SkillsData;
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-index">02 — {data.eyebrow}</p>
          <h2>{data.title}</h2>
          <p className="section-lede">{data.lede}</p>
        </div>

        <div className="skills-grid">
          {data.categories.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.1}>
              <div className="skill-column">
                <div className="skill-column-head">
                  <h3>{category.category}</h3>
                  <Icon name={category.icon} size={20} />
                </div>
                <ul className="skill-list">
                  {category.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
