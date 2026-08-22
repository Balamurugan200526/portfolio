import React from 'react';
import { SkillCategory } from '../types';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import * as SiIcons from 'react-icons/si';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="p-4 sm:p-6 rounded-2xl bg-card border border-border shadow-sm transition-all hover:shadow-md hover:border-border/80"
    >
      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 font-mono">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {category.skills.map((skill, i) => {
          // Dynamically get the icon component from react-icons/si
          const Icon = SiIcons[skill.icon as keyof typeof SiIcons];
          
          return (
            <div 
              key={skill.name}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-accent/50 border border-border/50 rounded-lg group hover:bg-background hover:border-primary/50 transition-all cursor-default"
            >
              {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />}
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
