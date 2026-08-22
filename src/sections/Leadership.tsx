import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { leadership } from '../data/leadership';
import { staggerContainer, fadeUp } from '../utils/animations';
import { Trophy, Presentation, Users, Briefcase } from 'lucide-react';

const icons = {
  google: Briefcase, // fallback for google icon
  trophy: Trophy,
  presentation: Presentation,
  users: Users,
};

export function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mx-auto max-w-2xl mb-10 sm:mb-16">
          <SectionHeading 
            label="// community & impact" 
            title="Leadership & Extracurriculars" 
            className="items-center mb-4 sm:mb-6"
          />
          <p className="text-xs sm:text-base text-muted-foreground">
            Beyond writing code, I am passionate about building communities, sharing knowledge, and participating in competitive programming events.
          </p>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          {leadership.map((item) => {
            const IconComponent = icons[item.icon];
            
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="flex items-start gap-3.5 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-card border border-border rounded-2xl transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
