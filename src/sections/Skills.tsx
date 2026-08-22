import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { staggerContainer } from '../utils/animations';

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          label="// skills & expertise" 
          title="Tools of the Trade" 
          className="items-center text-center mx-auto"
        />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
