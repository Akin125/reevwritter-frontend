"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { AnimateOnScroll, StaggerContainer } from "@/hooks/useScrollAnimation";
import { FloatingOrb, ScrollLinked } from "@/hooks/useParallax";
import { useSpotsCounter } from "@/hooks/useSpotsCounter";

const stats = [
  { value: "95%", label: "First-attempt renders" },
  { value: "90%+", label: "Citation accuracy" },
  { value: "0", label: "Fake references" },
];

const ValueProposition = () => {
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
    <section id="ethics" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Parallax background orbs */}
      <FloatingOrb className="top-0 left-1/4 hidden sm:block" speed={0.12} size="lg" color="primary" />
      <FloatingOrb className="bottom-0 right-0" speed={0.08} size="md" color="accent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Quote section with parallax */}
        <ScrollLinked translateY={[20, -20]}>
          <AnimateOnScroll animation="fade-up" className="text-center mb-20">
            <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-muted-foreground">
              "Technology should{" "}
              <span className="text-foreground">assist writers</span>, not{" "}
              <span className="text-foreground">replace them</span>."
            </p>
          </AnimateOnScroll>
        </ScrollLinked>

        {/* Stats with parallax */}
        <ScrollLinked translateY={[15, -10]}>
          <StaggerContainer className="grid grid-cols-3 gap-4 sm:gap-8 mb-20" staggerDelay={100}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
              >
              <div className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </div>
            ))}
          </StaggerContainer>
        </ScrollLinked>

        {/* Waitlist form with parallax */}
        <ScrollLinked translateY={[10, -5]}>
          <div id="waitlist-form">
          <AnimateOnScroll animation="fade-up" className="text-center">
            {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Join the waitlist</h3>
              <p className="text-muted-foreground mb-2">Sign up with your email address to save your spot.</p>
              <div className="relative w-full max-w-lg mx-auto mb-6">
                <div className="relative border border-border/50 rounded-xl px-4 sm:px-6 py-4 bg-card/40 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-medium text-foreground">Free spots are running out</span>
                    <span className="text-xs bg-primary/15 text-primary font-semibold px-3 py-1 rounded-full border border-primary/20 whitespace-nowrap">1,500 words free</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Join the waitlist now to lock in your free access.</p>
                  <div className="relative h-3 w-full rounded-full bg-muted/30 overflow-hidden mb-2.5">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out animate-glow-ring"
                      style={{ 
                        width: `${((5000 - spotsLeft) / 5000) * 100}%`,
                        boxShadow: '0 0 12px hsl(227 71% 55% / 0.8), 0 0 30px hsl(227 71% 55% / 0.4), inset 0 1px 0 hsl(227 71% 70% / 0.4)'
                      }}
                    />
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
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" variant="hero" className="gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-8 py-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg text-foreground font-medium">You're on the list!</span>
            </div>
          )}
            </AnimateOnScroll>
          </div>
        </ScrollLinked>
      </div>
    </section>
  );
};

export default ValueProposition;
