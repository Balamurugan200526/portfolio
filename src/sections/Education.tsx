import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/education';
import { staggerContainer, fadeUp } from '../utils/animations';
import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">

        <SectionHeading
          label="// academic background"
          title="Education"
          className="items-center text-center mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-10 sm:mt-16 max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-3.5 sm:left-5 top-0 h-full w-[2px] bg-border"></div>

          <div className="space-y-6 sm:space-y-8">
            {education.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative pl-10 sm:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-5 sm:top-6 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-sm sm:text-base text-primary font-medium">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm bg-accent px-2.5 py-1 sm:px-3 sm:py-1 rounded-full w-fit">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      {item.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}