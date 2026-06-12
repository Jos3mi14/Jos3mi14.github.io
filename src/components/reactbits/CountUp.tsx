import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const startValue = direction === "up" ? from : to;
  const endValue = direction === "up" ? to : from;

  const motionValue = useMotionValue(startValue);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });

  const hasAnimated = useRef(false);

  const decimalPlaces = Math.max(
    (to.toString().split(".")[1] || "").length,
    (from.toString().split(".")[1] || "").length,
  );

  const formatNumber = useCallback(
    (num: number) => {
      const fixed = num.toFixed(decimalPlaces);
      if (!separator) return fixed;
      const [intPart, decPart] = fixed.split(".");
      const withSeparator = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
      return decPart ? `${withSeparator}.${decPart}` : withSeparator;
    },
    [decimalPlaces, separator],
  );

  useEffect(() => {
    if (inView && startWhen && !hasAnimated.current) {
      hasAnimated.current = true;
      onStart?.();
      const timeout = setTimeout(() => {
        motionValue.set(endValue);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, startWhen, delay, endValue, motionValue, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest);
      }
      if (
        hasAnimated.current &&
        ((direction === "up" && latest >= to) ||
          (direction === "down" && latest <= from))
      ) {
        onEnd?.();
      }
    });
    return () => unsubscribe();
  }, [springValue, formatNumber, to, from, direction, onEnd]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(startValue)}
    </span>
  );
}
