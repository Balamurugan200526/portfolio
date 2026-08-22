import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-purple-500 origin-left"
        style={{ scaleX: progress / 100 }}
      />
    </div>
  );
}
