import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from 'motion/react';

interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  spring?: { mass: number; stiffness: number; damping: number };
}

function DockItem({
  item,
  mouseX,
  baseSize,
  magnification,
  distance,
  spring,
}: {
  item: DockItemData;
  mouseX: MotionValue<number>;
  baseSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const distFromMouse = useTransform(mouseX, (val: number) => {
    if (!ref.current) return distance + 1;
    const rect = ref.current.getBoundingClientRect();
    return val - rect.left - rect.width / 2;
  });

  const sizeTransform = useTransform(distFromMouse, [-distance, 0, distance], [
    baseSize,
    baseSize * magnification,
    baseSize,
  ]);

  const size = useSpring(sizeTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={item.onClick}
    >
      <div
        className="flex items-center justify-center w-full h-full rounded-xl"
        style={{
          background: 'var(--card, #0d1b28)',
          border: '1px solid var(--border, #162335)',
          color: 'var(--text-1, #f0f4ff)',
          fontSize: '18px',
        }}
      >
        {item.icon}
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 px-3 py-1 rounded-md text-xs whitespace-nowrap"
            style={{
              background: 'var(--card, #0d1b28)',
              border: '1px solid var(--border, #162335)',
              color: 'var(--text-1, #f0f4ff)',
            }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Dock: React.FC<DockProps> = ({
  items,
  className = '',
  magnification = 1.6,
  distance = 120,
  panelHeight = 48,
  baseItemSize = 38,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e: React.MouseEvent) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-end gap-3 px-4 py-2 rounded-2xl ${className}`}
      style={{
        height: panelHeight + 16,
        background: 'var(--card, #0d1b28)',
        border: '1px solid var(--border, #162335)',
      }}
    >
      {items.map((item, i) => (
        <DockItem
          key={i}
          item={item}
          mouseX={mouseX}
          baseSize={baseItemSize}
          magnification={magnification}
          distance={distance}
          spring={spring}
        />
      ))}
    </motion.div>
  );
};

export default Dock;
