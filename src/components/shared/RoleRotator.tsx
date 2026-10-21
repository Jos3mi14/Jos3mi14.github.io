import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface RoleRotatorProps {
  items: string[];
  interval?: number;
}

/**
 * Muestra un rol por turno. La lista completa se expone a los
 * lectores de pantalla y el texto visible queda oculto para
 * evitar anuncios intrusivos al rotar.
 */
export default function RoleRotator({
  items,
  interval = 2800,
}: RoleRotatorProps) {
  const [index, setIndex] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (prefersReducedMotion || items.length < 2) return;

    const cycle = () => {
      setSwapping(true);
      timeoutRef.current = window.setTimeout(() => {
        setIndex((current) => (current + 1) % items.length);
        setSwapping(false);
      }, 180);
    };

    const id = window.setInterval(cycle, interval);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeoutRef.current);
    };
  }, [items.length, interval, prefersReducedMotion]);

  if (items.length === 0) return null;

  return (
    <span className="role-rotator">
      <span
        className="role-rotator-track"
        data-swapping={swapping ? "true" : "false"}
        aria-hidden="true"
      >
        {items[index]}
      </span>
      <span className="sr-only">{items.join(", ")}</span>
    </span>
  );
}
