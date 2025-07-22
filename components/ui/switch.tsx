"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  showIcons?: boolean;
}

function Switch({
  className,
  showIcons = false,
  checked,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 relative inline-flex h-[1.25rem] w-12 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      checked={checked}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none relative z-10 flex size-[1.1rem] items-center justify-center rounded-full ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
        )}
      >
        {showIcons && (
          <>
            {checked ? (
              <Moon className="h-2.5 w-2.5 text-blue-400" />
            ) : (
              <Sun className="h-2.5 w-2.5 text-orange-500" />
            )}
          </>
        )}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

export { Switch };
