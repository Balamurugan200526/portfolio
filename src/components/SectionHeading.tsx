import React from 'react';
import { cn } from '../utils/cn';
import { staggerContainer, fadeUp } from '../utils/animations';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-col gap-2 mb-12", className)}
    >
      <motion.span 
        variants={fadeUp}
        className="text-primary font-mono text-sm font-medium tracking-wider uppercase"
      >
        {label}
      </motion.span>
      <motion.h2 
        variants={fadeUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
