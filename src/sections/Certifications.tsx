import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { CertificateCard } from '../components/CertificateCard';
import { certifications } from '../data/certifications';
import { staggerContainer } from '../utils/animations';

export function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeading 
          label="// continuous learning" 
          title="Certifications & Achievements" 
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <CertificateCard key={cert.id} certification={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
