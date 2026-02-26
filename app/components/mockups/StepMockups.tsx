"use client";

import { cn } from "@/lib/utils";
import { FileText, Upload as UploadIcon, Check, Users, BookOpen, Target, AlignLeft, CheckCircle2, RefreshCw, PenLine, FileDown } from "lucide-react";
import MockupSourceCard from "./MockupSourceCard";

interface StepMockupProps {
  className?: string;
}

// Step 1: Create Brief - Form fields
export const BriefStepMockup = ({ className }: StepMockupProps) => {
  const fields = [
    { icon: AlignLeft, label: "Title", value: "Neural Networks in Medicine" },
    { icon: Users, label: "Audience", value: "Academic" },
    { icon: BookOpen, label: "Style", value: "APA 7th" },
    { icon: Target, label: "Words", value: "5,000" },
  ];
  
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 w-full", className)}>
      <div className="space-y-2">
        {fields.map((field, i) => {
          const FieldIcon = field.icon;
          return (
            <div key={i} className="flex items-center gap-3 p-2.5 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] transition-all duration-200 hover:border-primary/30">
              <FieldIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-xs text-muted-foreground w-16">{field.label}</span>
              <span className="flex-1 text-xs text-foreground">{field.value}</span>
            </div>
          );
        })}
      </div>
      
      {/* Attached refs */}
      <div className="mt-3 p-2 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
        <span className="text-xs text-muted-foreground">3 references attached</span>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-6 h-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
              <FileText className="w-3 h-3 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 2: Plan & Refine - Structured outline
export const PlanStepMockup = ({ className }: StepMockupProps) => {
  const sections = [
    { title: "Introduction", approved: true },
    { title: "Literature Review", approved: true },
    { title: "Methodology", approved: false },
    { title: "Conclusion", approved: false },
  ];
  
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 w-full", className)}>
      <div className="space-y-2 mb-3">
        {sections.map((section, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg border text-xs transition-all duration-200",
              section.approved 
                ? "bg-green-500/5 border-green-500/20" 
                : "bg-[#1a1a1a] border-[#2a2a2a] hover:border-primary/30"
            )}
          >
            <CheckCircle2 className={cn(
              "w-3.5 h-3.5",
              section.approved ? "text-green-500" : "text-muted-foreground/30"
            )} />
            <span className="text-foreground">{section.title}</span>
          </div>
        ))}
      </div>
      
      {/* Refine prompt */}
      <div className="flex items-center gap-2 p-2 bg-primary/5 border border-primary/20 rounded-lg">
        <RefreshCw className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-primary italic">Refine with feedback...</span>
      </div>
    </div>
  );
};

// Step 3: AI Writes - Content generation with citations
export const WriteStepMockup = ({ className }: StepMockupProps) => {
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 space-y-3 w-full", className)}>
      {/* Writing progress */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <PenLine className="w-3.5 h-3.5 text-primary" />
        <span>Writing Section 2 of 4...</span>
      </div>
      
      <MockupSourceCard 
        title="Neural Network Optimization"
        source="IEEE Transactions, 2023"
        verified
        compact
      />
      <MockupSourceCard 
        title="Deep Learning in Diagnostics"
        source="Nature Medicine, 2024"
        verified
        compact
      />
      
      {/* Word count indicator */}
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
        <span>1,240 / 1,500 words</span>
        <div className="flex items-center gap-1 text-green-500">
          <Check className="w-3.5 h-3.5" />
          <span>4 citations verified</span>
        </div>
      </div>
    </div>
  );
};

// Step 4: Export - DOCX/PDF download
export const ExportStepMockup = ({ className }: StepMockupProps) => {
  const formats = [
    { label: "APA 7th", active: true },
    { label: "MLA 9", active: false },
    { label: "Harvard", active: false },
    { label: "IEEE", active: false },
    { label: "Chicago", active: false },
    { label: "Vancouver", active: false },
  ];
  
  return (
    <div className={cn("bg-[#0d0d0d] rounded-xl p-4 w-full", className)}>
      <p className="text-xs text-muted-foreground mb-3">Citation format:</p>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {formats.map((format, i) => (
          <button
            key={i}
            className={cn(
              "px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200",
              format.active 
                ? "bg-primary/15 border-primary/30 text-primary" 
                : "bg-[#1a1a1a] border-[#2a2a2a] text-muted-foreground hover:border-primary/30 hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5"
            )}
          >
            {format.label}
          </button>
        ))}
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
