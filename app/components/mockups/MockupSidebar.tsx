import { cn } from "@/lib/utils";
import { Home, FileText, BookOpen, Settings, PenLine, FolderOpen, Clock, BarChart3 } from "lucide-react";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  count?: number;
}

interface MockupSidebarProps {
  className?: string;
  compact?: boolean;
}

const navItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: PenLine, label: "New Report" },
  { icon: FileText, label: "My Reports", count: 8 },
  { icon: BookOpen, label: "References" },
];

const collections: SidebarItem[] = [
  { icon: Clock, label: "Recent" },
  { icon: FolderOpen, label: "Projects", count: 3 },
  { icon: BarChart3, label: "Usage" },
];

const MockupSidebar = ({ className, compact = false }: MockupSidebarProps) => {
  return (
    <div className={cn(
      "flex flex-col bg-[#111111] border-r border-[#2a2a2a]",
      compact ? "w-14 py-4" : "w-48 p-4",
      className
    )}>
      {/* Logo */}
      <div className={cn("flex items-center gap-2 mb-6", compact && "justify-center")}>
        <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="text-primary text-xs font-bold">T</span>
        </div>
        {!compact && <span className="font-semibold text-sm text-foreground">Thesiora</span>}
      </div>
      
      {/* Main nav */}
      <div className="space-y-1 mb-6">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm transition-all duration-200",
              item.active 
                ? "bg-primary/10 text-primary border border-primary/20" 
                : "text-muted-foreground hover:bg-[#1a1a1a] hover:text-foreground hover:translate-x-0.5",
              compact && "justify-center px-0"
            )}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {!compact && (
              <>
                <span className="flex-1">{item.label}</span>
                {item.count && (
                  <span className="text-xs text-muted-foreground">{item.count}</span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      
      {/* Collections */}
      {!compact && (
        <>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 px-2.5">
            Workspace
          </div>
          <div className="space-y-1">
            {collections.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-muted-foreground hover:bg-[#1a1a1a] hover:text-foreground hover:translate-x-0.5 transition-all duration-200 cursor-pointer"
            >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.count && (
                  <span className="text-xs">{item.count}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
      
      {/* Settings at bottom */}
      <div className="mt-auto">
        <div className={cn(
          "flex items-center gap-3 px-2.5 py-2 rounded-lg text-sm text-muted-foreground hover:bg-[#1a1a1a] hover:text-foreground transition-all duration-200 cursor-pointer",
          compact && "justify-center px-0"
        )}>
          <Settings className="w-4 h-4" />
          {!compact && <span>Settings</span>}
        </div>
      </div>
    </div>
  );
};

export default MockupSidebar;
