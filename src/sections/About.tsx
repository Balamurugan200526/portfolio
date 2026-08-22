import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../utils/animations';
import { MapPin, GraduationCap, Building, User, Code2, Smartphone, Terminal, Brain, Database } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Visual Quote/Code block */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative"
          >
            <div className="lg:sticky lg:top-32 rounded-2xl bg-[#0d1117] border border-border shadow-2xl overflow-hidden font-mono text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-muted-foreground text-xs">balamurugan.ts</div>
              </div>
              <div className="p-4 sm:p-6 overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code className="language-typescript">
<span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
<br/>  name: <span className="text-green-400">'Balamurugan S'</span>,
<br/>  role: <span className="text-green-400">'Software Engineer'</span>,
<br/>  location: <span className="text-green-400">'Tamil Nadu, India'</span>,
<br/>  education: <span className="text-green-400">'B.Tech IT'</span>,
<br/>  skills: [<span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>],
<br/>  passion: [<span className="text-green-400">'Building scalable apps'</span>,
<br/>            <span className="text-green-400">'Solving problems'</span>],
<br/>
<br/>  <span className="text-blue-400">buildFuture</span>() {'{'}
<br/>    <span className="text-purple-400">return</span> <span className="text-purple-400">this</span>.skills.map(<span className="text-orange-400">skill</span> =&gt; 
<br/>      <span className="text-blue-300">createImpact</span>(<span className="text-orange-400">skill</span>)
<br/>    );
<br/>  {'}'}
<br/>{'}'};
<br/>
<br/><span className="text-blue-400">developer</span>.<span className="text-blue-300">buildFuture</span>();
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col"
          >
            <SectionHeading label="// about me" title="Passionate Builder, Lifelong Learner" />
            
            <motion.div variants={fadeUp} className="prose prose-lg dark:prose-invert max-w-none mb-10 text-muted-foreground">
              <p>
                Hello! I'm Balamurugan, a dedicated Software Engineer currently pursuing my B.Tech in Information Technology at AVC College of Engineering. My journey in tech is driven by a deep fascination with how code can solve real-world problems.
              </p>
              <p>
                I specialize in mobile app development with Flutter and full-stack web development using React and Node.js. Whether it's building a college bus tracking system with real-time maps or a smart event registration platform, I thrive on taking complex requirements and turning them into clean, usable, and scalable software.
              </p>
              <p>
                My goal is to work at the intersection of great engineering and excellent user experience, continuously learning new technologies to build products that matter.
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10">
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Name</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">Balamurugan S</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Education</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">B.Tech IT (2027)</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Institution</div>
                  <div className="font-semibold text-foreground text-xs sm:text-sm">AVC College of Engineering.</div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Location</div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">Tamil Nadu, India</div>
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Interests</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-accent/50 text-xs sm:text-sm font-medium">
                  <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" /> Mobile app Development
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-accent/50 text-xs sm:text-sm font-medium">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" /> Open Source
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-accent/50 text-xs sm:text-sm font-medium">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" /> Problem Solving
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-accent/50 text-xs sm:text-sm font-medium">
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" /> Full Stack web development
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border bg-accent/50 text-xs sm:text-sm font-medium">
                  <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" /> Data analytics & Machine learning
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
