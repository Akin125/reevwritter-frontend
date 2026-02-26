import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-full border border-border bg-input px-5 py-3 text-base text-foreground ring-offset-background transition-all duration-200",
          "placeholder:text-muted-foreground",
          "hover:border-primary/50",
          "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
