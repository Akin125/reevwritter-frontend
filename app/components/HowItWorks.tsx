"use client";

import { ClipboardList, GitBranch, PenLine, Download } from "lucide-react";
import { AnimateOnScroll, StaggerContainer } from "@/hooks/useScrollAnimation";
import { FloatingOrb, ScrollLinked } from "@/hooks/useParallax";
import { 
  BriefStepMockup, 
  PlanStepMockup, 
  WriteStepMockup, 
  ExportStepMockup 
} from "@/app/components/mockups/StepMockups";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Create your brief",
    description: "Define your report's title, audience, citation style, and word targets. Attach primary references to guide Thesiora.",
    Mockup: BriefStepMockup,
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Review & refine the plan",
    description: "A structured plan is generated with subtopics and sections. Edit, reorder, or provide feedback to iterate.",
    Mockup: PlanStepMockup,
  },
  {
    number: "03",
    icon: PenLine,
    title: "Thesiora writes, you control",
    description: "Each section is drafted with verified citations and natural academic tone. Refine any section with feedback.",
    Mockup: WriteStepMockup,
  },
  {
    number: "04",
    icon: Download,
    title: "Export DOCX or PDF",
    description: "Download your polished report with TOC, formatted references, tables, and charts — ready for submission.",
    Mockup: ExportStepMockup,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-32 px-4 sm:px-6 scroll-mt-20 overflow-hidden">
      {/* Parallax background orbs */}
      <FloatingOrb className="top-20 -right-10 md:-right-20" speed={0.1} size="md" color="primary" />
      <FloatingOrb className="bottom-20 left-0 hidden sm:block" speed={0.15} size="lg" color="accent" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-muted-foreground">From brief to</span>{" "}
            <span className="text-foreground">polished report</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Four steps. Full control at every stage. You approve, refine, and own the final output.
          </p>
        </AnimateOnScroll>

        {/* Steps - 2x2 grid with aligned cards */}
        <ScrollLinked translateY={[15, -10]}>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 items-stretch" staggerDelay={100}>
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const MockupComponent = step.Mockup;
              return (
                <div key={index} className="bg-card border border-border rounded-3xl p-5 sm:p-8 h-full flex flex-col neon-glow transition-all duration-400 overflow-hidden">
                  <div className="flex items-start gap-4 sm:gap-5 mb-6 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 neon-glow">
                      <StepIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-primary/50 font-mono text-sm">{step.number}</span>
                      <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* CSS Mockup */}
                  <div className="relative flex-1 flex flex-col justify-end">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent rounded-xl blur-xl animate-glow-pulse" />
                    <MockupComponent className="relative z-10" />
                  </div>
                </div>
              );
            })}
          </StaggerContainer>
        </ScrollLinked>
      </div>
    </section>
  );
};

export default HowItWorks;
