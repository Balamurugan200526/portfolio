import React from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';
import { Github, ExternalLink, Code2, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = project.featured;

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "group relative flex flex-col bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
        isFeatured ? "md:col-span-2 md:flex-row md:h-[400px]" : "h-full"
      )}
    >
      {/* Number Badge */}
      <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center font-mono text-xs font-bold text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-muted/30 border-b border-border/50 flex items-center justify-center",
          isFeatured ? "md:w-1/2 md:border-b-0 md:border-r" : "h-44 sm:h-48"
        )}
      >
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center text-center p-6">
            <Code2 className="w-12 h-12 text-muted-foreground/50 mb-2" />
            <span className="text-sm font-mono text-muted-foreground">
              Screenshot Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col flex-1 p-4 sm:p-6 lg:p-8",
          isFeatured ? "md:w-1/2" : ""
        )}
      >
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
              {project.category}
            </span>

            {isFeatured && (
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        {isFeatured && (
          <div className="hidden md:block mb-6 space-y-2 flex-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-muted-foreground bg-accent/50 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}