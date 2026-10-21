import Reveal from "../shared/Reveal";
import RoleRotator from "../shared/RoleRotator";
import Icon from "../shared/Icon";
import { handleSmoothScroll } from "../../utils/scrollUtils";
import type { HeroData } from "../../data/portfolioData";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-eyebrow hero-animate">
            <span className="status-dot" aria-hidden="true" />
            <span>Portafolio · 2026</span>
            <span>{data.title}</span>
          </p>

          <h1 className="hero-name hero-animate">
            {data.name} <em>{data.surname}</em>
          </h1>

          <p className="hero-role hero-animate">
            <span>Construyo con</span>
            <RoleRotator items={data.rotatingTexts} />
          </p>

          <p className="hero-lede hero-animate">{data.lede}</p>

          <div className="hero-actions hero-animate">
            <a
              href={data.ctaPrimary.href}
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, data.ctaPrimary.href, 80)}
            >
              {data.ctaPrimary.label}
              <Icon name="arrow-right" size={16} />
            </a>
            <a
              href={data.ctaSecondary.href}
              className="btn btn-ghost"
              onClick={(e) => handleSmoothScroll(e, data.ctaSecondary.href, 80)}
            >
              {data.ctaSecondary.label}
            </a>
            <a
              href={data.ctaGithub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              {data.ctaGithub.label}
              <Icon name="arrow-up-right" size={14} />
            </a>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="spec-panel">
            <div className="spec-panel-head">
              <span className="label">Ficha técnica</span>
              <span className="label">2026</span>
            </div>
            <dl className="spec-list">
              {data.spec.map((row) => (
                <div className="spec-row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
