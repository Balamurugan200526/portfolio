import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { navigation } from '../data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background border-t border-border pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white font-bold text-lg tracking-wider">
                BS
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">Balamurugan S</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Software Engineer specializing in Flutter and Full Stack development. Building robust applications with a focus on user experience and clean code.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="https://github.com/Balamurugan200526" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/balamurugan-s-468387337?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:balasabarish098@email.com" className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-full">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navigation.slice(0, 4).map(item => (
                <li key={item.label}>
                  <button onClick={() => scrollToSection(item.href)} className="hover:text-primary transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {navigation.slice(4).map(item => (
                <li key={item.label}>
                  <button onClick={() => scrollToSection(item.href)} className="hover:text-primary transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                500+ Visitors <span className="text-xs opacity-50"></span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-muted-foreground font-mono text-center md:text-left">
          <p>© {currentYear} Balamurugan S. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Built with <Heart className="w-3 h-3 text-red-500 fill-current mx-1" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
