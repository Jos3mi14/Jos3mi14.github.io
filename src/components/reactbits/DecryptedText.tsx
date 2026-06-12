import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  animateOn?: "view" | "hover" | "click";
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center" | "random";
  className?: string;
}

const getRandomChar = (originalChar: string): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  if (originalChar === " ") return " ";
  if (/[a-z]/i.test(originalChar)) {
    return chars[Math.floor(Math.random() * 26)];
  }
  if (/[0-9]/.test(originalChar)) {
    return String(Math.floor(Math.random() * 10));
  }
  return chars[Math.floor(Math.random() * chars.length)];
};

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 8,
  animateOn = "view",
  sequential = false,
  revealDirection = "start",
  className = "",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set(),
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  const getRevealOrder = useCallback(
    (length: number) => {
      const indices = Array.from({ length }, (_, i) => i);
      if (revealDirection === "start") return indices;
      if (revealDirection === "end") return indices.reverse();
      if (revealDirection === "center") {
        const center = Math.floor(length / 2);
        return indices.sort(
          (a, b) => Math.abs(a - center) - Math.abs(b - center),
        );
      }
      return indices;
    },
    [revealDirection],
  );

  useEffect(() => {
    if (!isScrambling || prefersReducedMotion) {
      if (prefersReducedMotion) {
        setDisplayText(text);
        setRevealedIndices(new Set(text.split("").map((_, i) => i)));
      }
      return;
    }

    let currentIteration = 0;
    const revealed = new Set<number>();
    const order = getRevealOrder(text.length);
    let orderIndex = 0;

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      currentIteration++;
      if (sequential) {
        if (orderIndex < order.length) {
          revealed.add(order[orderIndex]);
          setRevealedIndices(new Set(revealed));
          orderIndex++;
        }
      }

      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (sequential && revealed.has(i)) return char;
            if (!sequential && currentIteration >= maxIterations) return char;
            return getRandomChar(char);
          })
          .join(""),
      );

      const done = sequential
        ? orderIndex >= order.length
        : currentIteration >= maxIterations;
      if (done) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
        setRevealedIndices(new Set(text.split("").map((_, i) => i)));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [
    isScrambling,
    text,
    speed,
    maxIterations,
    sequential,
    prefersReducedMotion,
    getRevealOrder,
  ]);

  useEffect(() => {
    if (animateOn !== "view") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setIsScrambling(true);
        }
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated]);

  const handleHover = () => {
    if (animateOn === "hover") {
      setRevealedIndices(new Set());
      setIsScrambling(true);
    }
  };

  const handleClick = () => {
    if (animateOn === "click") {
      setRevealedIndices(new Set());
      setIsScrambling(true);
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${className}`}
      onMouseEnter={handleHover}
      onClick={handleClick}
    >
      {displayText.split("").map((char, i) => {
        const isRevealed =
          !isScrambling ||
          (sequential && revealedIndices.has(i)) ||
          char === text[i];
        return (
          <motion.span
            key={i}
            className="inline-block"
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 2 }}
            transition={{ duration: 0.15, delay: i * 0.02 }}
          >
            {isRevealed ? char : getRandomChar(char)}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
