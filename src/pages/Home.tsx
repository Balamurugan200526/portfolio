import React from 'react';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';
import { BackToTop } from '../components/BackToTop';
import { MouseGlow } from '../components/MouseGlow';
import { LoadingScreen } from '../components/LoadingScreen';

import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Certifications } from '../sections/Certifications';
import { Leadership } from '../sections/Leadership';
import { Education } from '../sections/Education';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <LoadingScreen />
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Education />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
