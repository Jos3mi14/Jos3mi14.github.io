import Reveal from "../shared/Reveal";
import type { AboutData } from "../../data/portfolioData";

interface AboutSectionProps {
  data: AboutData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-index">01 — Sobre mí</p>
          <h2>Desarrollo móvil con visión de negocio</h2>
          <p className="section-lede">
            Combino ingeniería de software con pensamiento estratégico para
            construir productos móviles que resuelven problemas reales y generan
            valor sostenible.
          </p>
        </div>

        <Reveal>
          <div className="about-band">
            <div className="about-band-stat">
              <span className="value">{data.featuredStat.value}</span>
              <span className="label">{data.featuredStat.label}</span>
            </div>
            <div className="about-band-text">
              <h3>{data.featuredText.title}</h3>
              <p>{data.featuredText.description}</p>
            </div>
          </div>
        </Reveal>

        <div className="about-columns">
          <Reveal delay={0.1}>
            <div className="about-column">
              <h3>{data.workStyle.title}</h3>
              <ul className="about-list">
                {data.workStyle.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="about-column">
              <h3>{data.interests.title}</h3>
              <ul className="about-list">
                {data.interests.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
