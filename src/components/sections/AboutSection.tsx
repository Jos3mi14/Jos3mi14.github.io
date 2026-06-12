import FadeInView from "../shared/FadeInView";
import type { AboutData } from "../../data/portfolioData";

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="section">
      <div className="container section-header">
        <h2>Desarrollo móvil con visión de negocio</h2>
        <p className="section-lede">
          Combino ingeniería de software con pensamiento estratégico para
          construir productos móviles que resuelven problemas reales y generan
          valor sostenible.
        </p>
      </div>
      <div className="container about-grid">
        <FadeInView direction="up" delay={0}>
          <div className="about-featured">
            <div className="about-featured-stat">
              <span className="value">{data.featuredStat.value}</span>
              <span className="label">{data.featuredStat.label}</span>
            </div>
            <div className="about-featured-text">
              <h3>{data.featuredText.title}</h3>
              <p>{data.featuredText.description}</p>
            </div>
          </div>
        </FadeInView>
        <FadeInView direction="up" delay={0.1}>
          <div className="about-card">
            <h3>{data.workStyle.title}</h3>
            <ul>
              {data.workStyle.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeInView>
        <FadeInView direction="up" delay={0.2}>
          <div className="about-card">
            <h3>{data.interests.title}</h3>
            <ul>
              {data.interests.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
