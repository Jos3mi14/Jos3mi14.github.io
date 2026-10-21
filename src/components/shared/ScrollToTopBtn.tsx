import { useEffect, useState } from "react";
import Icon from "./Icon";

interface ScrollToTopBtnProps {
  threshold?: number;
}

export default function ScrollToTopBtn({ threshold = 300 }: ScrollToTopBtnProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setVisible(window.pageYOffset > threshold);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
