import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from 'next-themes';

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const { theme } = useTheme();

  // Only show glow in dark mode
  if (theme !== 'dark') return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      animate={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.05), transparent 40%)`
      }}
    />
  );
}
