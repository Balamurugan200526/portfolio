import React from 'react';
import { Experience } from '../types';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { Briefcase } from 'lucide-react';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeUp}
      className="relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] items-start mb-12 last:mb-0"
    >
      {/* LEFT column */}
      {isEven ? (
        <div className="md:pr-8">
          <Card experience={experience} />
        </div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* CENTER column — icon node */}
      <div className="hidden md:flex justify-center">
        <div className="w-12 h-12 rounded-full bg-card border-4 border-background shadow-md flex items-center justify-center z-10">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      {/* RIGHT column */}
      {!isEven ? (
        <div className="md:pl-8">
          <Card experience={experience} />
        </div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* Mobile — card shown full width */}
      <div className="md:hidden mt-4">
        <Card experience={experience} />
      </div>
    </motion.div>
  );
}

function Card({ experience }: { experience: Experience }) {
  return (
    <div className="w-full p-6 md:p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

      <div className="relative z-10 mb-3">
        <h3 className="text-xl font-bold text-foreground mb-1">{experience.role}</h3>
        <p className="text-primary font-medium text-sm">{experience.company}</p>
      </div>

      <span className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-xs font-mono text-muted-foreground mb-4">
        {experience.duration}
      </span>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
        {experience.description}
      </p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 bg-accent/50 text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}