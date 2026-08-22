import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../utils/animations';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

export function Hero() {
  const typedText = useTypingEffect([
    'Software Engineer.',
    'Flutter Developer.',
    'Full Stack Developer.',
    'Problem Solver.'
  ], 100, 50, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">Balamurugan</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground flex flex-wrap items-center">
                I am a <span className="text-primary ml-2 font-mono tracking-tight">{typedText}</span>
                <span className="w-[3px] h-8 md:h-10 bg-primary ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Building real-world software, solving problems, and continuously learning new technologies to bridge the gap between great engineering and great user experiences.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 w-full sm:w-auto">
              <a 
                href="#projects"
                className="text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                View Projects
              </a>
              <button 
                className="px-6 py-3 rounded-full border border-border bg-card hover:bg-accent text-foreground font-medium flex items-center justify-center gap-2 transition-all hover:border-foreground/20 group"
                onClick={() => alert("TODO: Download PDF")}
              >
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                Resume
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 text-muted-foreground">
              <a href="https://github.com/Balamurugan200526" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/balamurugan-s-468387337?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:balasabarish098@email.com" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
             {/* Main Avatar Area */}
<div className="absolute inset-8 rounded-full bg-card border border-border shadow-2xl overflow-hidden">
  <img
    src="/projects/photo.png.jpeg" // Update this path based on your project
    alt="Balamurugan S"
    className="w-full h-full object-cover object-center"
  />
</div>
              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 -right-2 sm:top-10 sm:-right-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/80 backdrop-blur-md border border-border shadow-xl flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-mono text-xs sm:text-sm font-semibold">consistency</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-14 -left-2 sm:bottom-20 sm:-left-10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/80 backdrop-blur-md border border-border shadow-xl flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-mono text-xs sm:text-sm font-semibold">hard work</span>
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 right-4 sm:right-10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-card/80 backdrop-blur-md border border-border shadow-xl flex items-center gap-2"
              >
                <span className="text-base sm:text-lg font-bold text-primary">15+</span>
                <span className="text-xs text-muted-foreground font-medium">Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
