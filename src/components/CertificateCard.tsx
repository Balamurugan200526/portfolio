import React from 'react';
import { Certification } from '../types';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { Award, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  certification: Certification;
}

export function CertificateCard({ certification }: CertificateCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative bg-card border border-border rounded-xl p-4 sm:p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
        <Award className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>
      
      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
        </div>
        
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {certification.title}
        </h3>
        
        <div className="flex flex-col gap-1 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-medium text-muted-foreground">
            {certification.issuer}
          </p>
          <p className="text-xs font-mono text-muted-foreground/70">
            Issued: {certification.date}
          </p>
        </div>
        
        <a
          href={certification.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          View Certificate <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
