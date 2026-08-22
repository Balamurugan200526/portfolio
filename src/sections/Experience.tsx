import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { experiences } from "../data/experience";
import { staggerContainer, fadeUp } from "../utils/animations";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        <SectionHeading
          label="// career"
          title="Work Experience"
          className="items-center text-center mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-16"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                <span className="text-xs sm:text-sm font-mono text-primary font-medium">{exp.duration}</span>
              </div>

              <p className="mt-2 text-base sm:text-lg font-medium">
                {exp.company}
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground">
                {exp.location}
              </p>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}