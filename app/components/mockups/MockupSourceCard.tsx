import { cn } from "@/lib/utils";
import { FileText, ExternalLink, CheckCircle2 } from "lucide-react";

interface MockupSourceCardProps {
  title: string;
  source?: string;
  snippet?: string;
  verified?: boolean;
  className?: string;
  compact?: boolean;
}

const MockupSourceCard = ({ 
  title, 
  source, 
  snippet, 
  verified = false, 
  className,
  compact = false
}: MockupSourceCardProps) => {
  return (
    <div className={cn(
      "group flex gap-3 p-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl transition-all duration-300 hover:border-primary/30 hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5",
      compact && "p-2",
      className
    )}>
      {/* Icon */}
      <div className={cn(
        "w-10 h-10 rounded-lg bg-[#252525] border border-[#3a3a3a] flex items-center justify-center flex-shrink-0",
        compact && "w-8 h-8"
      )}>
        <FileText className={cn("text-muted-foreground", compact ? "w-3.5 h-3.5" : "w-4 h-4")} />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className={cn(
            "font-medium text-foreground truncate",
            compact ? "text-xs" : "text-sm"
          )}>
            {title}
          </h4>
          {verified && (
            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
          )}
        </div>
        
        {source && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
            <ExternalLink className="w-3 h-3" />
            <span className="truncate">{source}</span>
          </div>
        )}
        
        {snippet && !compact && (
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {snippet}
          </p>
        )}
      </div>
    </div>
  );
};

export default MockupSourceCard;
