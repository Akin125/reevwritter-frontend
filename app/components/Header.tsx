"use client";

import { Button } from "@/app/components/ui/button";
// Placeholder logo - replace with your actual logo
const thesioraLogo = "/assets/thesiora-logo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-3 group">
            <img 
              src={thesioraLogo} 
              alt="Thesiora" 
              className="h-7 w-7 brightness-0 invert"
            />
            <span className="font-display font-semibold text-lg text-foreground">
              Thesiora
            </span>
            <span className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5">
              BETA
            </span>
          </button>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground"
            >
              How it works
            </Button>
            <span className="text-muted-foreground mx-2">|</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground"
            >
              Blog
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-4 mt-2 bg-card border border-border rounded-2xl overflow-hidden shadow-card">
          <nav className="p-4 flex flex-col gap-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('features')} 
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              Features
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('how-it-works')} 
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              How it works
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-muted-foreground hover:text-foreground"
            >
              Blog
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
