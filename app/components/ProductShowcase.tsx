"use client";

import { AnimateOnScroll, StaggerContainer } from "@/hooks/useScrollAnimation";
import { FloatingOrb, ScrollLinked } from "@/hooks/useParallax";
import { PenLine, RefreshCw, Shield } from "lucide-react";
import {
  BriefMockup,
  PlanRefineMockup,
  WriterMockup,
  CitationsMockup,
  RefinementMockup } from
"@/app/components/mockups/FeatureMockups";

const features = [
{
  title: "Describe your report brief",
  description: "Set your title, audience, tone, citation style, and word targets. Thesiora structures everything from there.",
  Mockup: BriefMockup
},
{
  title: "Review & refine your plan",
  description: "A structured plan is generated with subtopics and sections. Edit, reorder, or refine with natural language feedback.",
  Mockup: PlanRefineMockup
},
{
  title: "Writes with verified citations",
  description: "Every section is drafted with real, cross-verified references. No fake citations, ever.",
  Mockup: CitationsMockup
}];


const additionalFeatures = [
{
  title: "Iterative refinement",
  description: "Provide feedback on any section to regenerate improved content — without starting over.",
  Mockup: RefinementMockup
},
{
  title: "Export-ready documents",
  description: "Download polished DOCX or PDF with TOC, headings, tables, charts, and formatted references.",
  Mockup: WriterMockup
}];


const highlights = [
{
  icon: PenLine,
  title: "You stay the author",
  description: "Thesiora assists your writing. You approve every plan and edit every section."
},
{
  icon: RefreshCw,
  title: "Refine, don't restart",
  description: "Iterative feedback loops at both planning and writing stages."
},
{
  icon: Shield,
  title: "Zero fake citations",
  description: "Every reference is cross-verified against real publications."
}];


const ProductShowcase = () => {
  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Subtle gradient fade from hero bg */}
      <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-background/0 to-transparent opacity-50" />
      {/* Parallax background orbs */}
      <FloatingOrb className="top-0 right-0 hidden sm:block" speed={0.12} size="lg" color="accent" />
      <FloatingOrb className="top-1/3 -left-10 md:-left-20" speed={0.08} size="md" color="primary" />
      <FloatingOrb className="bottom-1/4 right-1/4" speed={0.1} size="sm" color="primary" />
      
      {/* Section header */}
      <div className="container mx-auto max-w-5xl mb-24 relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-muted-foreground">From brief to</span>
              <br className="md:hidden" />{" "}
              <span className="text-foreground">polished report.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Human-in-the-loop at every step. You control the plan, the content, and the final output.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Main feature - full width with parallax */}
      <div className="container mx-auto max-w-5xl mb-16 relative z-10">
        <ScrollLinked translateY={[20, -20]}>
          <AnimateOnScroll animation="fade-up">
            <div className="bg-card border border-border rounded-3xl p-6 md:p-12 neon-glow neon-glow-bottom transition-all duration-400 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {features[0].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {features[0].description}
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl blur-2xl animate-glow-pulse" />
                  <BriefMockup className="relative z-10" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </ScrollLinked>
      </div>

      {/* Two column features with aligned cards */}
      <div className="container mx-auto max-w-5xl mb-16 relative z-10">
        <ScrollLinked translateY={[20, -10]}>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {features.slice(1).map((feature, index) => {
              const MockupComponent = feature.Mockup;
              return (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                   <div className="bg-card border border-border rounded-3xl p-6 md:p-8 h-full flex-col neon-glow transition-all duration-400 overflow-hidden flex items-start justify-start">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 break-words">
                      {feature.description}
                    </p>
                    <div className="relative flex-1 flex flex-col justify-end overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent rounded-xl blur-xl animate-glow-pulse" />
                      <MockupComponent className="relative z-10" />
                    </div>
                  </div>
                </AnimateOnScroll>);

            })}
          </div>
        </ScrollLinked>
      </div>

      {/* Additional two column features with aligned cards */}
      <div className="container mx-auto max-w-5xl mb-24 relative z-10">
        <ScrollLinked translateY={[15, -10]}>
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {additionalFeatures.map((feature, index) => {
              const MockupComponent = feature.Mockup;
              return (
                <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-card border border-border rounded-3xl p-6 md:p-8 h-full flex-col neon-glow transition-all duration-400 overflow-hidden flex items-start justify-start">
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 break-words">
                      {feature.description}
                    </p>
                    <div className="relative flex-1 flex flex-col justify-end overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent rounded-xl blur-xl animate-glow-pulse" />
                      <MockupComponent className="relative z-10" />
                    </div>
                  </div>
                </AnimateOnScroll>);

            })}
          </div>
        </ScrollLinked>
      </div>

      {/* Highlights with parallax */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <StaggerContainer className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12" staggerDelay={100}>
          {highlights.map((item, index) =>
          <ScrollLinked key={index} translateY={[15, -5]}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollLinked>
          )}
        </StaggerContainer>
      </div>
    </section>);

};

export default ProductShowcase;