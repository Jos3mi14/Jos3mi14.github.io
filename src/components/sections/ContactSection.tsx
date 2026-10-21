import Reveal from "../shared/Reveal";
import Icon from "../shared/Icon";
import type { ContactData } from "../../data/portfolioData";
import { handleSmoothScroll } from "../../utils/scrollUtils";

interface ContactSectionProps {
  data: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <p className="section-index">04 — Contacto</p>
        </div>

        <Reveal>
          <div className="contact-panel">
            <h2 className="contact-title">{data.title}</h2>
            <p className="section-lede">{data.lede}</p>

            <div className="contact-grid">
              {data.contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="contact-item"
                >
                  <Icon name={item.icon} size={18} />
                  <span>
                    <span className="label">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-actions">
              <a href={data.ctaPrimary.href} className="btn btn-primary">
                {data.ctaPrimary.label}
                <Icon name="arrow-right" size={16} />
              </a>
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
        </Reveal>
      </div>
    </section>
  );
}
