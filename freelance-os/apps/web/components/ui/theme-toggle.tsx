"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  variant?: "ghost" | "outline" | "secondary";
  showLabel?: boolean;
}

export function ThemeToggle({
  className,
  variant = "ghost",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={showLabel ? "default" : "icon"}
      onClick={toggleTheme}
      className={cn(
        "relative rounded-full transition-all duration-200 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-200",
        showLabel ? "px-3.5 h-9 text-xs font-semibold gap-2" : "h-9 w-9",
        className
      )}
      title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label="Toggle light and dark theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4.5 w-4.5 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-4.5 w-4.5 text-slate-700 transition-transform duration-300 rotate-0 scale-100" />
      )}

      {showLabel && (
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      )}
    </Button>
  );
}
