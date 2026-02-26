"use client";

import MockupWindow from "./MockupWindow";
import MockupSearchBar from "./MockupSearchBar";
import MockupChatMessage from "./MockupChatMessage";
import MockupSourceCard from "./MockupSourceCard";
import { cn } from "@/lib/utils";
import { FileText, Users, BookOpen, Target, AlignLeft, RefreshCw, MessageSquare, CheckCircle2, FileDown } from "lucide-react";

interface FeatureMockupProps {
  className?: string;
}

// Feature 1: Brief form
export const BriefMockup = ({ className }: FeatureMockupProps) => {
  const fields = [
    { label: "Report Title", value: "Ethics in Healthcare Decision-Making" },
    { label: "Audience", value: "Academic / Peer Review" },
    { label: "Citation Style", value: "APA 7th" },
    { label: "Word Target", value: "5,000 words" },
  ];

  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-5 w-full", className)}>
      <div className="space-y-3">
        {fields.map((field, i) => (
          <div key={i} className="group">
            <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
            <div className="px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-foreground transition-all duration-200 group-hover:border-primary/30">
              {field.value}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2.5 bg-primary/20 border border-primary/30 rounded-lg text-sm text-primary font-medium transition-all duration-200 hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5">
        Generate Plan
      </button>
    </div>
  );
};

// Feature 2: Plan & Refine - Editable plan with refinement
export const PlanRefineMockup = ({ className }: FeatureMockupProps) => {
  const sections = [
    { title: "1. Introduction & Background", words: "800", status: "approved" },
    { title: "2. Ethical Frameworks", words: "1,200", status: "editing" },
    { title: "3. Case Studies", words: "1,500", status: "pending" },
    { title: "4. Recommendations", words: "1,000", status: "pending" },
  ];

  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 w-full", className)}>
      <div className="space-y-2 mb-3">
        {sections.map((section, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-lg border text-sm transition-all duration-200 hover:border-primary/30 min-w-0",
              section.status === "approved" && "bg-green-500/5 border-green-500/20",
              section.status === "editing" && "bg-primary/5 border-primary/20",
              section.status === "pending" && "bg-[#1a1a1a] border-[#2a2a2a]"
            )}
          >
            <CheckCircle2 className={cn(
              "w-4 h-4 flex-shrink-0",
              section.status === "approved" ? "text-green-500" : "text-muted-foreground/30"
            )} />
            <span className="flex-1 min-w-0 text-foreground truncate">{section.title}</span>
            <span className="text-xs text-muted-foreground flex-shrink-0">{section.words}w</span>
          </div>
        ))}
      </div>
      
      {/* Refinement input */}
      <div className="flex items-center gap-2 p-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg transition-all duration-200 hover:border-primary/30">
        <MessageSquare className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        <span className="text-xs text-muted-foreground italic">Add more depth to the ethics section...</span>
      </div>
    </div>
  );
};

// Feature 3: AI writes with verified citations
export const CitationsMockup = ({ className }: FeatureMockupProps) => {
  return (
    <MockupWindow className={cn("w-full", className)}>
      <div className="p-4 space-y-4">
        <MockupChatMessage 
          type="user" 
          message="Write the introduction section based on my approved plan"
        />
        <MockupChatMessage 
          type="ai" 
          message="Here's the introduction draft (812 words) with 6 verified citations from your reference library. Review and request refinements if needed:"
        />
        <div className="grid grid-cols-1 gap-2 ml-0 sm:ml-11">
          <MockupSourceCard 
            title="Ethics in Clinical Decision-Making"
            source="The Lancet, 2024"
            verified
            compact
          />
          <MockupSourceCard 
            title="Algorithmic Bias in Healthcare"
            source="Nature Medicine, 2023"
            verified
            compact
          />
        </div>
      </div>
    </MockupWindow>
  );
};

// Feature 4: Iterative refinement
export const RefinementMockup = ({ className }: FeatureMockupProps) => {
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 space-y-3 w-full", className)}>
      {/* Feedback message */}
      <div className="flex gap-3 p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl">
        <RefreshCw className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs text-muted-foreground mb-1">Your feedback:</p>
          <p className="text-sm text-foreground">"Make the methodology section more specific to NHS case studies"</p>
        </div>
      </div>
      
      {/* Before/After indicator */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
          <span className="text-xs text-muted-foreground block mb-1">Before</span>
          <div className="h-2 w-full bg-[#2a2a2a] rounded mb-1" />
          <div className="h-2 w-3/4 bg-[#2a2a2a] rounded" />
        </div>
        <div className="p-2.5 bg-primary/5 border border-primary/20 rounded-lg">
          <span className="text-xs text-primary block mb-1">Refined</span>
          <div className="h-2 w-full bg-primary/20 rounded mb-1" />
          <div className="h-2 w-5/6 bg-primary/20 rounded" />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-xs text-green-500">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Section refined — 3 new citations added</span>
      </div>
    </div>
  );
};

// Feature 5: Export-ready documents
export const WriterMockup = ({ className }: FeatureMockupProps) => {
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 w-full", className)}>
      {/* Document preview */}
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 mb-3 transition-colors duration-200 hover:border-[#3a3a3a]">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground font-medium">AI_Ethics_Healthcare.docx</span>
        </div>
        <div className="space-y-1.5 text-xs text-muted-foreground">
          <div className="flex gap-2"><span className="text-foreground">✓</span> Table of Contents</div>
          <div className="flex gap-2"><span className="text-foreground">✓</span> 4 sections, 5,120 words</div>
          <div className="flex gap-2"><span className="text-foreground">✓</span> 23 verified citations (APA 7th)</div>
          <div className="flex gap-2"><span className="text-foreground">✓</span> 2 tables, 1 chart</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 bg-primary/20 border border-primary/30 rounded-lg text-sm text-primary font-medium transition-all duration-200 hover:bg-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-1.5">
          <FileDown className="w-3.5 h-3.5" />
          DOCX
        </button>
        <button className="py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-muted-foreground font-medium transition-all duration-200 hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 flex items-center justify-center gap-1.5">
          <FileDown className="w-3.5 h-3.5" />
          PDF
        </button>
      </div>
    </div>
  );
};
