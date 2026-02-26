"use client";

import MockupWindow from "./MockupWindow";
import MockupSidebar from "./MockupSidebar";
import MockupSearchBar from "./MockupSearchBar";
import MockupChatMessage from "./MockupChatMessage";
import MockupSourceCard from "./MockupSourceCard";
import { cn } from "@/lib/utils";

interface HeroMockupProps {
  className?: string;
}

const HeroMockup = ({ className }: HeroMockupProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Ambient glow behind the mockup */}
      <div className="absolute -inset-6 bg-gradient-to-b from-primary/15 via-primary/5 to-primary/20 rounded-3xl blur-3xl animate-glow-pulse" />
      
      <MockupWindow className="relative z-10" showMenuBar>
        <div className="flex h-[400px] md:h-[480px]">
          {/* Sidebar */}
          <MockupSidebar className="hidden md:flex" />
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col relative">
            {/* Floating search bar with typing animation */}
            <MockupSearchBar 
              floating 
              queries={[
                "Write a report on ethics in healthcare",
                "Summarize recent findings on climate policy",
                "Draft a literature review on renewable energy",
              ]}
              typing
              typingSpeed={50}
              cycleInterval={2500}
            />
            
            {/* Background content (blurred) */}
            <div className="flex-1 p-6 opacity-30 blur-[2px]">
              <div className="space-y-4">
                <MockupChatMessage 
                  type="user" 
                  message="Generate an evidence-based section on data privacy regulations in healthcare"
                />
                <MockupChatMessage 
                  type="ai" 
                  message="Here's a draft section with 6 verified citations. Review and refine the plan, or approve to continue writing..."
                />
                <div className="grid grid-cols-2 gap-3 ml-11">
                  <MockupSourceCard 
                    title="GDPR Compliance Framework"
                    source="IEEE Access, 2024"
                    compact
                  />
                  <MockupSourceCard 
                    title="Health Data Privacy Review"
                    source="The Lancet Digital"
                    compact
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MockupWindow>
    </div>
  );
};

export default HeroMockup;
