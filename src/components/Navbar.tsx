import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1));
      
      let currentSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on layout
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white font-bold text-lg tracking-wider shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              BS
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                  activeSection === item.href.substring(1)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold transition-transform hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              Hire Me
            </button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-12 overflow-y-auto md:hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 text-foreground bg-card rounded-full border border-border"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-2xl font-bold tracking-tight text-left py-4 border-b border-border/50 transition-colors ${
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="mt-8 rounded-full bg-primary text-primary-foreground px-6 py-4 text-lg font-semibold w-full"
              >
                Let's Work Together
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
