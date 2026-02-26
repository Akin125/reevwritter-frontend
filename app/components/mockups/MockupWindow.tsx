import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MockupWindowProps {
  children: ReactNode;
  className?: string;
  showMenuBar?: boolean;
  title?: string;
}

const MockupWindow = ({ children, className, showMenuBar = false, title }: MockupWindowProps) => {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0d0d0d] shadow-2xl neon-glow neon-glow-bottom w-full", className)}>
      {/* Title bar with traffic lights */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {title && (
          <span className="ml-4 text-xs text-muted-foreground font-medium">{title}</span>
        )}
      </div>
      
      {/* Optional menu bar */}
      {showMenuBar && (
        <div className="flex items-center gap-4 px-4 py-2 bg-[#151515] border-b border-[#2a2a2a] text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Thesiora</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>
      )}
      
      {/* Content area */}
      <div className="bg-[#0d0d0d]">
        {children}
      </div>
    </div>
  );
};

export default MockupWindow;
