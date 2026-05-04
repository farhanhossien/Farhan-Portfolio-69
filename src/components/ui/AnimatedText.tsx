import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = (index + 1) / characters.length;
        
        // This calculates individual character opacity based on scroll
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={index} className="relative inline-block">
            <span className="opacity-20 whitespace-pre">{char}</span>
            <motion.span
              style={{ opacity }}
              className="absolute left-0 top-0 text-white whitespace-pre"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
