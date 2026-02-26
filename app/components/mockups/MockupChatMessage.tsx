import { cn } from "@/lib/utils";
import { Sparkles, User } from "lucide-react";

interface MockupChatMessageProps {
  type: "user" | "ai";
  message: string;
  className?: string;
}

const MockupChatMessage = ({ type, message, className }: MockupChatMessageProps) => {
  const isAI = type === "ai";
  
  return (
    <div className={cn("flex gap-3", className)}>
      {/* Avatar */}
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
        isAI 
          ? "bg-primary/15 border border-primary/20" 
          : "bg-[#2a2a2a] border border-[#3a3a3a]"
      )}>
        {isAI ? (
          <Sparkles className="w-4 h-4 text-primary" />
        ) : (
          <User className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      
      {/* Message content */}
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted-foreground mb-1">
          {isAI ? "Thesiora" : "You"}
        </div>
        <div className={cn(
          "text-sm leading-relaxed",
          isAI ? "text-foreground" : "text-muted-foreground"
        )}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default MockupChatMessage;
