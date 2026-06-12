import FadeInView from "../shared/FadeInView";
import StarBorder from "../reactbits/StarBorder";
import GradientText from "../reactbits/GradientText";
import type { ContactData } from "../../data/portfolioData";
import { handleSmoothScroll } from "../../utils/scrollUtils";

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="section">
      <div id="contacto" aria-hidden="true" />
      <FadeInView direction="up">
        <div className="container contact-card">
          <div>
            <h2>
              <GradientText
                colors={data.titleGradientColors}
                animationSpeed={data.titleAnimationSpeed}
              >
                Cuéntame tu próximo reto
              </GradientText>
            </h2>
            <p className="section-lede">{data.lede}</p>
            <div className="contact-grid">
              {data.contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="contact-item"
                >
                  <i className={item.icon} aria-hidden="true"></i>
                  <div>
                    <span className="label">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="contact-actions">
              <StarBorder
                as="a"
                color="var(--accent)"
                speed="4s"
                href={data.ctaPrimary.href}
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>{" "}
                {data.ctaPrimary.label}
              </StarBorder>
              <a
                href={data.ctaSecondary.href}
                className="btn btn-ghost"
                onClick={(e) =>
                  handleSmoothScroll(e, data.ctaSecondary.href, 80)
                }
              >
                {data.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
