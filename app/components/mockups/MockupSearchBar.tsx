"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Command } from "lucide-react";
import { useState, useEffect } from "react";

interface MockupSearchBarProps {
  query?: string;
  queries?: string[];
  cycleInterval?: number;
  placeholder?: string;
  className?: string;
  floating?: boolean;
  showShortcut?: boolean;
  typing?: boolean;
  typingSpeed?: number;
}

const MockupSearchBar = ({ 
  query, 
  queries,
  cycleInterval = 4000,
  placeholder = "Ask anything about your research...", 
  className,
  floating = false,
  showShortcut = true,
  typing = false,
  typingSpeed = 50
}: MockupSearchBarProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const activeQuery = queries ? queries[currentQueryIndex] : query;

  // Cycle through queries
  useEffect(() => {
    if (!queries || queries.length <= 1) return;
    if (!isTypingComplete) return;

    const timeout = setTimeout(() => {
      setCurrentQueryIndex((prev) => (prev + 1) % queries.length);
    }, cycleInterval);

    return () => clearTimeout(timeout);
  }, [queries, isTypingComplete, currentQueryIndex, cycleInterval]);

  // Typing effect
  useEffect(() => {
    if (!typing || !activeQuery) {
      setDisplayedText(activeQuery || "");
      setIsTypingComplete(true);
      return;
    }

    setDisplayedText("");
    setIsTypingComplete(false);
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < activeQuery.length) {
        setDisplayedText(activeQuery.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [activeQuery, typing, typingSpeed]);

  return (
    <div className={cn(
      "relative group",
      floating && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-20",
      className
    )}>
      {/* Glow effect - intensifies on hover */}
      <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      
      <div className="relative flex items-center gap-3 px-4 py-3.5 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl shadow-2xl transition-all duration-300 group-hover:border-primary/40 group-hover:bg-[#1f1f1f]">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 transition-transform duration-300 group-hover:scale-110 neon-glow">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          {activeQuery ? (
            <span className="text-foreground text-sm">
              {typing ? displayedText : query}
              {typing && !isTypingComplete && (
                <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
              )}
            </span>
          ) : (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          )}
        </div>
        
        {showShortcut && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="px-1.5 py-0.5 bg-[#2a2a2a] rounded border border-[#3a3a3a] font-mono">
              <Command className="w-3 h-3 inline" />
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-[#2a2a2a] rounded border border-[#3a3a3a] font-mono">K</kbd>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockupSearchBar;
