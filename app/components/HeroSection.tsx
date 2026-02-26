"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { FloatingOrb, ScrollLinked } from "@/hooks/useParallax";
import HeroMockup from "@/app/components/mockups/HeroMockup";
import { useSpotsCounter } from "@/hooks/useSpotsCounter";


const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const spotsLeft = useSpotsCounter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[hsl(227,50%,12%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[hsl(227,80%,25%/0.4)] via-[hsl(227,60%,18%/0.3)] to-transparent" />
      {/* Parallax background orbs */}
      <FloatingOrb className="top-20 -left-16 md:-left-32 hidden sm:block" speed={0.1} size="lg" color="primary" />
      <FloatingOrb className="top-40 right-0" speed={0.15} size="md" color="accent" />
      <FloatingOrb className="bottom-40 left-1/4" speed={0.08} size="sm" color="primary" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20">
        {/* Main headline */}
        <AnimateOnScroll animation="fade-up" duration={800}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-muted-foreground">Write</span>{" "}
            <span className="text-foreground">evidence-based</span>
            <br />
            <span className="text-foreground">reports</span>{" "}
            <span className="text-muted-foreground">in</span>{" "}
            <span className="text-foreground">minutes</span>
            <span className="text-primary">✦</span>
          </h1>
        </AnimateOnScroll>

        {/* Subheadline */}
        <AnimateOnScroll animation="fade-up" delay={100} duration={800}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From brief to polished, citation-backed report — you stay in control.<br className="hidden sm:block" />
            Thesiora assists your writing, never replaces it.
          </p>
        </AnimateOnScroll>

        {/* CTA Button */}
        <AnimateOnScroll animation="fade-up" delay={200} duration={800}>
          {!isSubmitted ?
          <div className="flex flex-col items-center gap-3">
              <Button
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              variant="hero"
              size="lg"
              className="gap-2">

                Get Started for Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="relative w-full max-w-lg mx-auto mt-6 animate-fade-in">
                <div className="relative border border-border/50 rounded-xl px-4 sm:px-6 py-4 bg-card/40 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground text-left">Join now — free spots are running out</span>
                    <span className="text-xs bg-primary/15 text-primary font-semibold px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">1,500 words free</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Sign up for the waitlist to claim your free access before it's gone.</p>
                  {/* Glowing progress bar */}
                  <div className="relative h-3 w-full rounded-full bg-muted/30 overflow-hidden mb-2.5">
                    <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out animate-glow-ring"
                    style={{
                      width: `${(5000 - spotsLeft) / 5000 * 100}%`,
                      boxShadow: '0 0 12px hsl(227 71% 55% / 0.8), 0 0 30px hsl(227 71% 55% / 0.4), inset 0 1px 0 hsl(227 71% 70% / 0.4)'
                    }} />

                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span><span className="text-primary font-bold text-base tabular-nums">{spotsLeft.toLocaleString()}</span> of 5,000 spots left</span>
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-xs text-primary font-medium">Live</span>
                    </span>
                  </div>
                </div>
              </div>
            </div> :

          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-foreground font-medium">You're on the list!</span>
            </div>
          }
        </AnimateOnScroll>
      </div>

      {/* Product mockup with parallax */}
      <ScrollLinked
        className="relative w-full max-w-5xl mx-auto"
        translateY={[0, -30]}
        scale={[0.98, 1]}>

        <AnimateOnScroll animation="fade-up" delay={300} duration={1000}>
          <HeroMockup />
        </AnimateOnScroll>
      </ScrollLinked>
    </section>);

};

export default HeroSection;