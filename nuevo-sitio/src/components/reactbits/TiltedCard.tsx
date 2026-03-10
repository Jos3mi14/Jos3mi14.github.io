import React, { useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from 'motion/react';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
  className?: string;
  borderRadius?: string;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 150,
  mass: 0.5,
};

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText = '',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '250px',
  imageHeight = '300px',
  imageWidth = '250px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showTooltip = false,
  overlayContent,
  displayOverlayContent = false,
  className = '',
  borderRadius = '15px',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), springValues);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), springValues);

  const scale = useSpring(isHovered ? scaleOnHover : 1, springValues);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <figure className={`relative ${className}`} style={{ height: containerHeight, width: containerWidth, perspective: '800px' }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          borderRadius,
          overflow: 'hidden',
        }}
        className="relative"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius }}
        />
        {displayOverlayContent && overlayContent && (
          <div className="absolute inset-0 z-10">{overlayContent}</div>
        )}
      </motion.div>
      {showTooltip && captionText && (
        <motion.figcaption
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="absolute bottom-[-30px] left-0 right-0 text-center text-sm"
          style={{ color: 'var(--text-2, #b8c8e0)' }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
};

export default TiltedCard;
