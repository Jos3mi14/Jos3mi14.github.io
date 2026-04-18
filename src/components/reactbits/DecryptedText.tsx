import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover' | 'click';
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [_isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const getRandomChar = useCallback(
    (originalChar: string) => {
      if (originalChar === ' ') return ' ';
      if (useOriginalCharsOnly) {
        const chars = text.replace(/\s/g, '').split('');
        return chars[Math.floor(Math.random() * chars.length)];
      }
      return characters[Math.floor(Math.random() * characters.length)];
    },
    [characters, text, useOriginalCharsOnly]
  );

  const getRevealOrder = useCallback(
    (length: number) => {
      const indices = Array.from({ length }, (_, i) => i);
      if (revealDirection === 'start') return indices;
      if (revealDirection === 'end') return indices.reverse();
      if (revealDirection === 'center') {
        const center = Math.floor(length / 2);
        return indices.sort((a, b) => Math.abs(a - center) - Math.abs(b - center));
      }
      return indices;
    },
    [revealDirection]
  );

  useEffect(() => {
    if (!isScrambling) return;

    let interval: ReturnType<typeof setInterval>;
    let currentIteration = 0;
    const revealed = new Set<number>();
    const order = getRevealOrder(text.length);
    let orderIndex = 0;

    interval = setInterval(() => {
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
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (sequential && revealed.has(i)) return char;
            if (!sequential && currentIteration >= maxIterations) return char;
            return getRandomChar(char);
          })
          .join('')
      );

      const done = sequential ? orderIndex >= order.length : currentIteration >= maxIterations;
      if (done) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
        setRevealedIndices(new Set(text.split('').map((_, i) => i)));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isScrambling, text, speed, maxIterations, sequential, getRandomChar, getRevealOrder]);

  useEffect(() => {
    if (animateOn !== 'view') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setIsScrambling(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated]);

  const handleHover = () => {
    if (animateOn === 'hover') {
      setIsHovering(true);
      setRevealedIndices(new Set());
      setIsScrambling(true);
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === 'hover') {
      setIsHovering(false);
    }
  };

  const handleClick = () => {
    if (animateOn === 'click') {
      setRevealedIndices(new Set());
      setIsScrambling(true);
    }
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {displayText.split('').map((char, i) => {
        const isRevealed =
          !isScrambling || (sequential && revealedIndices.has(i)) || char === text[i];
        return (
          <span
            key={i}
            className={isRevealed ? className : `${className} ${encryptedClassName}`}
          >
            {char}
          </span>
        );
      })}
    </motion.span>
  );
};

export default DecryptedText;
