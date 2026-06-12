import DecryptedText from "../reactbits/DecryptedText";
import RotatingText from "../reactbits/RotatingText";
import StarBorder from "../reactbits/StarBorder";
import FadeInView from "../shared/FadeInView";
import { handleSmoothScroll } from "../../utils/scrollUtils";
import type { HeroData } from "../../data/portfolioData";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="eyebrow">
          <span className="status-dot"></span>
          <span>{data.title}</span>
        </div>
        <h1>
          <DecryptedText
            text={data.name}
            animateOn="view"
            sequential={true}
            speed={60}
            revealDirection="start"
            className="hero-name-standalone"
          />
        </h1>
        <p className="hero-typewriter">
          <RotatingText
            texts={data.rotatingTexts}
            mainClassName="typewriter-word"
            staggerFrom="last"
            staggerDuration={0.03}
            splitBy="characters"
            rotationInterval={2800}
          />
        </p>
        <FadeInView direction="up" distance={20} delay={0.4}>
          <p className="lede">{data.lede}</p>
        </FadeInView>
        <FadeInView direction="up" distance={20} delay={0.6}>
          <div className="hero-actions">
            <StarBorder
              as="a"
              color="var(--accent)"
              speed="4s"
              href={data.ctaPrimary.href}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleSmoothScroll(e, data.ctaPrimary.href, 80)
              }
            >
              <i className="fas fa-code" aria-hidden="true"></i>{" "}
              {data.ctaPrimary.label}
            </StarBorder>
            <a
              href={data.ctaSecondary.href}
              className="btn btn-ghost"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                handleSmoothScroll(e, data.ctaSecondary.href, 80)
              }
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>{" "}
              {data.ctaSecondary.label}
            </a>
            <a
              href={data.ctaGithub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link"
            >
              {data.ctaGithub.label}{" "}
              <i
                className="fas fa-arrow-up-right-from-square"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </FadeInView>
      </div>
      <FadeInView direction="up" distance={10} delay={1.2}>
        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <i className="fas fa-chevron-down" aria-hidden="true"></i>
        </div>
      </FadeInView>
    </section>
  );
}
